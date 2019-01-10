import React, { useState } from "react";

import PopulateShape from "../components/populateShape";
import logo, { ReactComponent as Logo } from "../assets/logo.svg";

export default ({ stuff }) => {
  return (
    <div>
      <p>time to add that fancy CES glowy thing here!</p>
      <PopulateShape
        ShapeSrc={logo}
        ShapeComponent={Logo} // svg viewbox h and w
        PixelComponent={Logo} // replace with other SVG
      />
    </div>
  );
};
