import React, { Component } from "react";

// components
import ReportSize from "./atoms/ReportSize";
import generatePoints from "./atoms/generatePoints";

export default class SVGPopulator extends React.Component {
  state = {
    height: 0,
    width: 0,
    svgFilepath: "",
    pos: []
  };

  drawOnCanvas(canvas) {
    if (!canvas) {
      return; // Should not happen, but do check anyway
    }

    var ctx = canvas.getContext("2d");

    console.log(ctx);

    // the rest of the code in the fiddle to render the svg
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
    }
  }

  generateDimensionsFromSVGComponent() {
    const { ShapeComponent } = this.props;

    // if no svg path, use svgr component to get viewbox
    const svgObj = ShapeComponent();
    const [x0, y0, x1, y1] = svgObj.props.viewBox.split(" ");

    const ht = x1 - x0;
    const wd = y1 - y0;

    this.setState({ height: ht, width: wd });

    this.generatePositions({
      height: ht,
      width: wd,
      component: ShapeComponent
    });
  }

  generatePositions(props) {
    // make positions along path
    this.setState({
      pos: generatePoints(props)
    });
  }

  componentDidMount() {
    //this.generateDimensionsFromSVGComponent();
  }

  render() {
    const { ShapeComponent, PixelComponent } = this.props;

    if (!this.state.height || !this.state.width) {
      return (
        <ReportSize
          getSize={size => {
            this.setState({ height: size.height, width: size.width });
            this.generatePositions({
              height: size.height,
              width: size.width,
              component: ShapeComponent
            });
          }}
        >
          <ShapeComponent />
        </ReportSize>
      );
    } else {
      const { height, width } = this.state;

      return (
        <div
          style={{
            height: height,
            width: width,
            backgroundColor: "lightgrey"
          }}
        >
          <p>draw crazy shit here</p>
        </div>
      );
    }
  }
}
