import React from "react";

class ReportSize extends React.Component {
  refCallback = element => {
    if (element && this.props.getSize) {
      this.props.getSize(element.getBoundingClientRect().toJSON());
      // when you call getSize, you get the sizes
    }
  };

  render() {
    return (
      <div ref={this.refCallback} style={{ border: "1px solid red" }}>
        {this.props.children}
      </div>
    );
  }
}

export default ReportSize;
