import React from "react";

const Coordinates = ({ x, y }) => {
  return (
    // html template starts here
    <div className="coordinates">
      Coordinates: X={x.toFixed(2)} Y={y.toFixed(2)}
    </div>
    // html template ends here
  );
};

export default Coordinates;
