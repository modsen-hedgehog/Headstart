var config = {
    bubble_min_scale: 1,
    bubble_max_scale: 1,
    paper_min_scale: 1,
    paper_max_scale: 1,
    zoom_factor: 0.9,
    padding_articles: 0,
    circle_padding: 0,
    dynamic_sizing: false,

    // map
    min_height: 600,
    min_width: 600,
    max_height: 1000,
    multiples_size: 600,

    // map reference sizes
    reference_size: 650,
    max_diameter_size: 50,
    min_diameter_size: 30,
    max_area_size: 110,
    min_area_size: 50,

    // bubbles
    area_title_max_size: 50,

    // papers
    dogear_width: 0.1,
    dogear_height: 0.1,
    paper_width_factor: 1.2,
    paper_height_factor: 1.6,
    paper_readers_height_factor: 0.2,
    paper_metadata_height_correction: 25,

    // list
    min_list_size: 400,
    max_list_size: 500,
    list_height: 51,
    list_height_correction: 29,

    // preview
    preview_image_width_list: 230,
    preview_image_height_list: 298,
    preview_page_height: 400,
    preview_top_height: 30,
    preview_image_width: 738,
    preview_image_height: 984,
    abstract_small: 250,
    abstract_large: null,

    // data specific settings
    subdiscipline_title: "",
    use_area_uri: false,
    url_prefix: null,
    url_prefix_datasets: null,
    input_format: "csv",
    base_unit: "readers",
    preview_type: "image",

    is_force_areas: false,
    area_force_alpha: 0.02,

    is_force_papers: true,
    papers_force_alpha: 0.1,
    
    dynamic_force_area: false,
    dynamic_force_papers: false,

    render_list: true,
    render_bubbles: true,

    // show
    show_multiples: false,
    show_dropdown: true,
    show_intro: false,
    show_infolink: true,
    show_titlerow: true,
    show_list: false,
    show_context: false,
    show_infolink_areas: false,
    show_keywords: false,
    show_tags: false,
    hide_keywords_overview: true,
    convert_author_names: true,
    show_area: true,
    show_resulttype: false,
    show_comments: false,
    show_loading_screen: false,
    
    create_title_from_context: false,
    create_title_from_context_style: '',
    custom_title: null,
    is_title_clickable: true,

    sort_options: ["readers", "title", "authors", "year"],
    filter_options: ["all", "open_access", "publication", "dataset"],
    filter_field: null,
    sort_menu_dropdown: false,
    initial_sort: null,
    list_show_all_papers: false,

    content_based: false,

    filter_menu_dropdown: false,
    
    scale_toolbar: false,
    embed_modal: false,
    share_modal: false,
    faqs_button: false,
    faqs_url: "",
    
    is_authorview: false,
    
    is_streamgraph: false,
    streamgraph_zoom: false,
    streamgraph_colors: ["#28a2a3", "#671A54", "#CC3380", "#7acca3", "#c999ff", "#ffe199"
        , "#ccfff2", "#99DFFF", "#FF99AA", "#c5d5cf", "#FFBD99", "#2856A3"],
    

    // API / backend integration settings
    backend: "legacy",

    // transition
    transition_duration: 750,
    zoomout_transition: 750,

    // misc
    debug: false,
    debounce: 50,
    service: "none",
    language: "eng",
    hyphenation_language: "en",

    // behaviour settings
    is_evaluation: false,
    evaluation_service: "log",
    enable_mouseover_evaluation: false,
    is_adaptive: false,
    conference_id: 0,
    user_id: 0,
    max_recommendations: 10,
    max_documents: 100,

    //intro
    intro: "intro_cris",
    
    use_hypothesis: false,
    
    list_sub_entries: false,
    list_sub_entries_readers: false,
    list_sub_entries_number: false,
    list_sub_entries_statistics: false,
    list_additional_images: false,
    list_images: [],
    list_images_path: "images/",
    visual_distributions: false,
    list_show_external_vis: false,
    external_vis_url: "",
    list_set_backlink: false,
    
    credit_embed: false,
    canonical_url: null,
    
    doi_outlink: false,
    url_outlink: false,
    
    show_context_oa_number: true,
    context_most_relevant_tooltip: false,
    show_context_timestamp: false,
    
    hashtags_twitter_card: "okmaps,openscience,dataviz",
    
    service_names: {plos: "PLOS"
                        , base: "BASE"
                        , pubmed: "PubMed"
                        , doaj: "DOAJ"
                        , openaire: "OpenAIRE"
                        , linkedcat: "LinkedCat+"
                        , linkedcat_authorview: "LinkedCat+"
                        , linkedcat_browseview: "LinkedCat+"
                    },

    localization: {
        eng: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "readers",
            year: "date",
            authors: "authors",
            title: "title",
            default_title: 'Overview of <span id="num_articles"></span> documents',
            overview_label: 'Overview of',
            streamgraph_label: 'Streamgraph for',
            overview_authors_label: 'Overview of the works of',
            streamgraph_authors_label: 'Streamgraph for the works of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            most_relevant_tooltip: 'At the moment, we use the relevance ranking provided by the source API. Both PubMed and BASE mainly use text similarity between your query and the article metadata to determine the relevance. Please consult the FAQ for more information.',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            area: "Area",
            items: "items",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            backlink_list_streamgraph: "← Show all documents",
            backlink_list_streamgraph_stream_selected: "← Show all documents in stream",
            keywords: "Keywords",
            no_title: "No title",
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
        },
        ger: {
            loading: "Wird geladen...",
            search_placeholder: "Suche in der Liste...",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "Leser",
            year: "Jahr",
            authors: "Autor",
            title: "Titel",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            streamgraph_label: 'Streamgraph für',
            overview_authors_label: 'Überblick über die Werke von',
            streamgraph_authors_label: 'Streamgraph für die Werke von',
            custom_title_explanation: 'Dieser Titel wurde manuell geändert. Die Original-Suche lautet:',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            resulttype_label: 'Dokumentart',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Bereich",
            items: "Dokumente",
            backlink: "← Zurück zum Überblick",
            backlink_list: "← Zeige alle Dokumente des Bereichs",
            backlink_list_streamgraph: "← Zeige alle Dokumente an",
            backlink_list_streamgraph_stream_selected: "← Zeige alle Dokumente des Streams an",
            keywords: "Schlagwörter",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            embed_title: 'Visualisierung einbetten',
            sort_by_label: 'sortieren: ',
            relevance: "Relevanz",
            link: "Link",
            comment_by_label: "von",
            share_button_title: "Visualisierung teilen",
            embed_button_title: "Visualisierung auf einer anderen Seite einbetten",
            embed_button_text: 'Kopieren',
            embed_body_text: 'Sie können diesen Code verwenden, um die Visualisierung auf anderen Seiten einzubetten.',
            pdf_not_loaded: "Leider konnten wir das PDF nicht abrufen. Mehr Informationen finden Sie auf",
            pdf_not_loaded_linktext: "dieser Seite",
        },
        ger_linkedcat: {
           loading: "Wird geladen...",
            search_placeholder: "Suche in der Liste...",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "Leser",
            year: "Jahr",
            authors: "Autor",
            title: "Titel",
            default_title: 'Knowledge Map für <span id="num_articles"></span> Artikel',
            overview_label: 'Knowledge Map für',
            streamgraph_label: 'Streamgraph für',
            overview_authors_label: 'Knowledge Map für die Werke von',
            streamgraph_authors_label: 'Streamgraph für die Werke von',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'open access Dokumente',
            source_label: 'Quelle',
            resulttype_label: 'Dokumentart',
            documenttypes_label: 'Dokumentarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            bio_link: 'Biografie',
            area: "Bereich",
            area_streamgraph: "Schlagwort",
            items: "Dokumente",
            backlink: "← Zurück zum Überblick",
            backlink_list: "Zeige alle Dokumente des Bereichs",
            backlink_list_streamgraph: "Zeige alle Dokumente an",
            backlink_list_streamgraph_stream_selected: "Zeige alle Dokumente des Streams an",
            keywords: "Schlagwörter",
            basic_classification: "Basisklassifikation",
            ddc: "DDC",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            embed_title: 'Visualisierung einbetten',
            sort_by_label: 'sortieren: ',
            relevance: "Relevanz",
            link: "Link",
            comment_by_label: "von",
            share_button_title: "Visualisierung teilen",
            embed_button_title: "Visualisierung auf einer anderen Seite einbetten",
            embed_button_text: 'Kopieren',
            embed_body_text: 'Sie können diesen Code verwenden, um die Visualisierung auf anderen Seiten einzubetten.',
            pdf_load_text: "Dieser Vorgang kann mehrere Minuten dauern, da die gescannten Texte sehr umfangreich sein können. Bitte haben Sie etwas Geduld.",
            pdf_not_loaded: "Leider konnten wir das PDF nicht abrufen. Mehr Informationen finden Sie auf",
            pdf_not_loaded_linktext: "dieser Seite",
        },
        eng_plos: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "views",
            year: "date",
            authors: "authors",
            title: "title",
            area: "Area",
            items: "items",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            keywords: "Keywords",
            no_title: "No title",
            overview_label: 'Overview of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            source_label: 'Source',
            resulttype_label: 'Article type',
            documenttypes_label: 'Article types',
            documenttypes_tooltip: 'The following article types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
        },
        eng_pubmed: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            relevance: "relevance",
            readers: "citations",
            year: "year",
            authors: "authors",
            title: "title",
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            backlink_list_streamgraph: "← Show all documents",
            backlink_list_streamgraph_stream_selected: "← Show all documents in stream",
            keywords: "Keywords",
            no_title: "No title",
            overview_label: 'Overview of',
            streamgraph_label: 'Streamgraph for',
            overview_authors_label: 'Overview of the works of',
            streamgraph_authors_label: 'Streamgraph for the works of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            most_relevant_tooltip: 'To determine the most relevant documents, we use the relevance ranking provided by the source - either BASE or PubMed. Both sources compute the text similarity between your query and the article metadata to establish the relevance ranking. Please consult the FAQ for more information.',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            filter_by_label: 'show: ',
            all: "any",
            open_access: "Open Access",
            link: 'link',
            items: "items",
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_button_text: 'Copy',
            embed_title: 'embed map',
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
        },
        eng_openaire: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "more info",
            intro_icon: "",
            relevance: "relevance",
            readers: "readers",
            tweets: "tweets",
            year: "year",
            authors: "authors",
            citations: "citations",
            title: "title",
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            keywords: "Keywords",
            no_title: "No title",
            overview_label: 'Overview of',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Article types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            dataset_count_label: "datasets",
            paper_count_label: "papers",
            viper_edit_title: "How to add project resources",
            viper_edit_desc_label: `<p>Are you missing relevant publications and datasets related to this project? \ 
            <p>No problem: simply link further resources on the OpenAIRE website. \ 
            The resources will then be be automatically added to the map. \ 
            <p>Use the button indicated in the exemplary screenshot to do so: `,
            viper_button_desc_label: `<p>By clicking on the button below, you are redirected to the\
                OpenAIRE page for`,
            viper_edit_button_text: 'continue to openaire',
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_button_text: 'Copy',
            embed_title: 'embed map',
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            link: 'link',
            tweets_count_label: " tweets",
            readers_count_label: " readers (Mendeley)",
            citations_count_label: " citations (Crossref)",
            filter_by_label: 'show: ',
            all: "any",
            open_access: "Open Access",
            publication: "papers",
            dataset: "datasets",
            items: "items",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            scale_by_label: 'Scale map by:',
            scale_by_infolink_label: 'notes on use of metrics',
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            credit_alt: "VIPER was created by Open Knowledge Maps",
        },
         ger_cris: {
            loading: "Wird geladen...",
            search_placeholder: "Suchwort eingeben",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "mehr Informationen",
            intro_icon: "&#xf129;",
            intro_label_areas: "Verteilung der Respondenten",
            intro_areas_title: "Verteilung der Respondenten für ",
            readers: "Nennungen",
            year: "Jahr",
            authors: "Autor",
            title: "alphabetisch",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Themenfeld",
            backlink: "← Zurück zur Übersicht",
            backlink_list: "← Zeige alle Themen im Themenfeld",
            keywords: "Keywords",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            showmore_questions_label: "Alle",
            showmore_questions_verb: "Fragen anzeigen",
            distributions_label: "Verteilungen ",
            show_verb_label: "ausklappen",
            hide_verb_label: "einklappen",
            sort_by_label: 'sortieren: ',
            items: "Themen",
            comment_by_label: "von",
            scale_by_infolink_label: '',
            scale_by_label: 'Verteilung für:',
            credit_alt: "Created by Open Knowledge Maps",
        },
        ger_cris_2: {
            loading: "Wird geladen...",
            search_placeholder: "Suchwort eingeben",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "mehr Informationen",
            intro_icon: "&#xf129;",
            intro_label_areas: "Verteilung der Respondenten",
            intro_areas_title: "Verteilung der Respondenten für ",
            readers: "Anzahl Fragen",
            year: "Jahr",
            authors: "Autor",
            title: "alphabetisch",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Themenfeld",
            backlink: "← Zurück zur Übersicht",
            backlink_list: "← Zeige alle Themen im Themenfeld",
            keywords: "Keywords",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            showmore_questions_label: "Alle",
            showmore_questions_verb: "Fragen anzeigen",
            distributions_label: "Verteilungen ",
            show_verb_label: "ausklappen",
            hide_verb_label: "einklappen",
            sort_by_label: 'sortieren: ',
            items: "Themen",
            comment_by_label: "von",
            scale_by_infolink_label: '',
            scale_by_label: 'Verteilung für:',
            credit_alt: "Created by Open Knowledge Maps",
        },
        eng_cris_2: {
           loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "more information",
            intro_icon: "&#xf129;",
            intro_label_areas: "Distribution of respondents",
            intro_areas_title: "Distribution of respondents for ",
            readers: "no. questions",
            year: "date",
            authors: "authors",
            title: "alphabetically",
            default_title: 'Overview of <span id="num_articles"></span> documents',
            overview_label: 'Overview of',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            articles_label: 'documents',
            source_label: 'Source',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all topics in area",
            keywords: "Keywords",
            no_title: "No title",
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            showmore_questions_label: "Show all",
            showmore_questions_verb: "questions",
            distributions_label: "distributions ",
            show_verb_label: "expand",
            hide_verb_label: "collapse",
            items: "topics",
            scale_by_infolink_label: '',
            scale_by_label: 'Distribution for:',
            credit_alt: "Created by Open Knowledge Maps",
        },
    },

    scale_types: [],
    rescale_map: true,
    cris_legend: false,

    url_plos_pdf: "http://www.plosone.org/article/fetchObject.action?representation=PDF&uri=info:doi/",
    plos_journals_to_shortcodes: {
        "plos neglected tropical diseases": "plosntds",
        "plos one": "plosone",
        "plos biology": "plosbiology",
        "plos medicine": "plosmedicine",
        "plos computational Biology": "ploscompbiol",
        "plos genetics": "plosgenetics",
        "plos pathogens": "plospathogens",
        "plos clinical trials": "plosclinicaltrials"
    },

    // modern_frontend feature flag
    modern_frontend_enabled: false
};

if (config.content_based) {
    config.sort_options = ["title", "area"];
}

export default config;
