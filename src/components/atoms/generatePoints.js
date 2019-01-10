import React, { Component, useEffect } from "react";
import ReactSVG from "react-svg";

// The two important methods here are
// path.getTotalLength and path.getPointAtLength

// For more info see:
// https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement

// var path = document.getElementById("path");
// var obj = document.getElementById("obj");
// // Length of path
// var pathLength = Math.floor(path.getTotalLength());

// // Move obj element along path based on percentage of total length
// function moveObj(prcnt) {
//   prcnt = (prcnt * pathLength) / 100;

//   // Get x and y values at a certain point in the line
//   pt = path.getPointAtLength(prcnt);
//   pt.x = Math.round(pt.x);
//   pt.y = Math.round(pt.y);

//   obj.style.webkitTransform = "translate3d(" + pt.x + "px," + pt.y + "px, 0)";
// }

const lookForG = component => {
  // recursively look for <g>'s children
  console.log(component);
  if (component.type === "g") {
    return component.props.children.map(v => v.type);
  } else {
    return lookForG(component.props.children);
  }
};

const getPtAtPercent = (path, pathLength, pcnt) => {
  const prcnt = (pcnt * pathLength) / 100;

  // Get x and y values at a certain point in the line
  const pt = path.getPointAtLength(prcnt);
  pt.x = Math.round(pt.x);
  pt.y = Math.round(pt.y);

  return pt;
};

const getPtsFromPath = (path, pathLength, count = 10) => {
  if (count === "max") {
    return [...Array(pathLength)].map((v, i) => path.getPointAtLength(i));
  } else {
    const lengths = Math.floor(pathLength / count);
    return [...Array(count)].map((v, i) => path.getPointAtLength(i * lengths));
  }
};

const getChildrenFromElement = elem => {
  return Array.from(elem.children[0].children);
};

const convertToPaths = svg => {
  // https://aleen42.github.io/PersonalWiki/Programming/JavaScript/webgl/SVG/convert_shapes_to_path/convert_shapes_to_path.html
  // TODO

  return svg;
};

const convertPathsToCoordinates = (paths, count = 30) => {
  // https://codepen.io/realjameal/pen/gpzZGw?editors=1010
  // TODO

  return paths.map((p, i) => {
    console.log("path num: " + i);
    const len = Math.floor(p.getTotalLength());

    if (len) {
      return getPtsFromPath(p, len, count);
    } else {
      return [];
    }
  });
};

export default class GeneratePoints extends Component {
  state = {
    loaded: false,
    done: false,
    pos: []
  };
  svgElem = null;

  calculatePositions() {
    console.log("calculating pos!");
    // get all svg children
    const children = getChildrenFromElement(this.svgElem);
    // convert them all to paths
    const paths = convertToPaths(children);
    // get all coordinates in xy
    const coords = convertPathsToCoordinates(paths);
    // this should give you all the coordinates you need
    // for use in jsx
    console.log("coordinates calculated!: ");
    console.log(coords);

    // component state (currently not used)
    this.setState({ pos: coords });
    // callback to parent
    this.onGetPos(coords);
  }

  onGetPos(coords) {
    if (this.props.onGetPos && !this.state.done) {
      this.props.onGetPos(coords);
      this.setState({ done: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.svgElem && !this.state.done) {
      this.calculatePositions();
    }
  }

  componentDidMount() {
    const { height, width, component, src } = this.props.data;

    // not used yet
    const svgComponent = component();
    const c = lookForG(svgComponent);
    console.log(c);
  }

  render() {
    // because render is called twice (render, componentdidmount, render)
    // therefor ReactSVG is called twice.
    // TODO: circumvent this
    return (
      // set display none to hide
      <div style={{ display: "block" }}>
        <ReactSVG
          src={this.props.data.src}
          onInjected={(err, svg) => {
            console.log("svg loaded!");
            this.svgElem = svg;
          }}
        />
      </div>
    );
  }
}
