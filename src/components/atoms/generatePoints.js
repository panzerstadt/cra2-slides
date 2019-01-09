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

export default ({ height, width, component }) => {
  const c = component();
  console.log("in genpos");
  console.log(c);
  console.log(height);
  console.log(width);

  return [];
};
