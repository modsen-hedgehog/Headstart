// StateMachine for Streamgraph UI element in Headstart
// Filename: streamgraph.js
import StateMachine from 'javascript-state-machine';

import config from 'config';
import { mediator } from 'mediator';
import { io } from 'io';
import { canvas } from 'canvas';

export const streamgraph = StateMachine.create({

    events: [
        {name: "start", from: "none", to: "show"}
    ],

    callbacks: {

        onstart: function () {
        }
    }
});

const streamgraph_margin = {top: 20, right: 50, bottom: 50, left: 20};
const stream_colors = ["#2856A3", "#671A54", "#d5c4d0", "#99e5e3", "#F1F1F1"
        , "#dbe1ee", "#CC3380", "#99DFFF", "#FF99AA", "#c5d5cf", "#FFBD99", "#FFE699"];
const label_border_width = 5;
const label_round_factor = 5;

streamgraph.setupStreamgraph = function (streamgraph_data) {
    
    let streamgraph_width = canvas.available_width - streamgraph_margin.left - streamgraph_margin.right,
        streamgraph_height = canvas.current_vis_size - streamgraph_margin.top - streamgraph_margin.bottom;
    
    let stack = d3.layout.stack()
            .offset("silhouette")
            .values(function (d) {
                return d.values;
            })
            .x(function (d) {
                return d.date;
            })
            .y(function (d) {
                return d.value;
            });

    let nest = d3.nest()
            .key(function (d) {
                return d.key;
            });

    let area = d3.svg.area()
            .interpolate("cardinal")
            .x(function (d) {
                return x(d.date);
            })
            .y0(function (d) {
                return y(d.y0);
            })
            .y1(function (d) {
                return y(d.y0 + d.y);
            });

    let x = d3.time.scale()
            .range([0, streamgraph_width]);

    var y = d3.scale.linear()
            .range([streamgraph_height, 0]);

    var z = d3.scale.ordinal()
            .range(stream_colors);

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(d3.timeYears, 1);

    var yAxis = d3.svg.axis()
            .scale(y);
    
    let parsed_data = this.transformData(JSON.parse(streamgraph_data));
    let nested_entries = nest.entries(parsed_data);
    let streams = stack(nested_entries);

    x.domain(d3.extent(parsed_data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(parsed_data, function (d) {
            return d.y0 + d.y;
        })]);
    
    let streamgraph_subject = this.drawStreamgraph(streams, area, z);   
    let series = streamgraph_subject.selectAll(".streamgraph-area");
    this.drawLabels(series, x, y);
    this.drawAxes(streamgraph_subject, xAxis, yAxis, streamgraph_width, streamgraph_height);
    this.setupTooltip(streamgraph_subject, x);
    this.setupLinehelper();
}

streamgraph.transformData = function(json_data) {
    let parsed_data = [];

    json_data.subject.forEach(function (element) {
        let count = 0;
        element.y.forEach(function (data_point) {
            parsed_data.push({key: element.name, value: data_point, date: new Date(json_data.x[count])})
            count++;
        })
    })
    
    return parsed_data;
}

streamgraph.drawStreamgraph = function (streams, area, z) {
    let streamgraph_subject = d3.select("#streamgraph_subject")
            .append("g")
            .classed("streamgraph-chart", true)
            .attr("transform", "translate(" + streamgraph_margin.left
                                    + "," + streamgraph_margin.top + ")")

    let series = streamgraph_subject.selectAll(".stream")
            .data(streams)
            .enter().append("g")
            .attr("class", "streamgraph-area")


    series.append("path")
            .attr("class", "stream")
            .attr("d", function (d) {
                return area(d.values);
            })
            .style("fill", function (d, i) {
                return z(i);
            });
            
    return streamgraph_subject;
}

streamgraph.drawLabels = function (series, x, y) {
    series[0].forEach(function (element) {
        let d = element.__data__;
        
        d3.select(".streamgraph-chart").append('text')
                .attr("dy", "10")
                .classed("label", true)
                .text(d.key)
                .attr("transform", function () {
                    let max_value = d3.max(d.values, function (x) { return x.y })
                    let text_width = this.getBBox().width;
                    let text_height = this.getBBox().height;
                    let final_x, final_y;
                    d.values.forEach(function (element) {
                        if(element.y === max_value) {
                            final_x = x(element.date) - text_width/2;
                            final_y = y(element.y  + element.y0) 
                                    + ((y(element.y0) - y(element.y  + element.y0))/2) 
                                    - text_height/2;
                        }
                    })
                    return "translate(" + final_x + ", " + final_y + ")";
                })
    })
    
    let setTM = function(element, m) {
        element.transform.baseVal.initialize(element.ownerSVGElement.createSVGTransformFromMatrix(m))
    }
    
    let labels = d3.selectAll(".label")
    labels[0].forEach(function (label, i) {
        let bbox = label.getBBox();
        let ctm = label.getCTM();
        
        let rect = d3.select('.streamgraph-chart').insert('rect','text')
            .classed("label-background", true)
            .attr('x', bbox.x - streamgraph_margin.left - label_border_width)
            .attr('y', bbox.y - streamgraph_margin.top - label_border_width)
            .attr('width', bbox.width + label_border_width*2)
            .attr('height', bbox.height + label_border_width*2)
            .attr('rx', label_round_factor)
    
        setTM(rect[0][0], ctm)
    })
}

streamgraph.drawAxes = function(streamgraph_subject, xAxis, yAxis, streamgraph_width, streamgraph_height) {
    
    streamgraph_subject.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + streamgraph_height + ")")
            .call(xAxis);


    streamgraph_subject.append("g")
            .attr("class", "y axis")
            .call(yAxis.orient("left"));
}

streamgraph.setupTooltip = function(streamgraph_subject, x) {
    
    let tooltip = d3.select("#visualization")
            .append("div")
            .attr("class", "tip hidden")
            .style("top", $('#headstart-chart').offset().top + "px");
    
    streamgraph_subject.selectAll(".stream")
            .on("mouseover", function (d, i) {
                streamgraph_subject.selectAll(".stream").transition()
                        .duration(100)
                        .attr("class", function (d, j) {
                            return j != i ? 'stream lower-opacity' : 'stream';
                        })
            })
            .on("mouseout", function (d, i) {
                streamgraph_subject.selectAll(".stream").transition()
                        .duration(100)
                        .attr('class', 'stream')

                tooltip.classed("hidden", true);

            })
            .on("mousemove", function (d, i) {

                var color = d3.select(this).style('fill');

                let mouse = d3.mouse(this);
                let mousex = mouse[0];
                let mousey = mouse[1];
                var invertedx = x.invert(mousex);
                var xDate = invertedx.getFullYear();
                d.values.forEach(function (f) {
                    var year = (f.date.toString()).split(' ')[3];
                    if (xDate == year) {
                        tooltip
                                .style("left", mousex + "px")
                                .style("top", mousey + "px")
                                .html("<div class='year'>" + year + "</div><div class='key'><div style='background:" + color + "' class='swatch'>&nbsp;</div>" + f.key + "</div><div class='value'>" + f.value + "</div>")
                                .classed("hidden", false);
                    }
                });
            })
}

streamgraph.setupLinehelper = function() {
    let line_helper = d3.select("#headstart-chart")
            .append("div")
            .attr("class", "line_helper")
            .style("height", canvas.current_vis_size)

    d3.select(".streamgraph-chart")
            .on("mousemove", function () {
                line_helper.style("left", (d3.mouse(this)[0]) + "px")
            })
            .on("mouseover", function () {
                line_helper.style("left", (d3.mouse(this)[0]) + "px")
            });
}