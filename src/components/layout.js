import React, { Component } from "react";
import Swipeable from "react-swipeable";
import { Redirect } from "react-router-dom";

// styles
import "./layout.module.css";

// components
import Transition from "./transition";

class TemplateWrapper extends Component {
  state = {
    page: 1,
    change: false
  };

  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const slidePathnames = this.props.children.props.children.map(
      v => v.props.path
    );

    let now = slidePathnames
      .filter(v => v === this.props.location.pathname)[0]
      .replace("/", "");
    now = parseInt(now);
    const slidesLength = slidePathnames.length;

    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        return this.setState({ page: now + 1, change: true });
      } else if (keyCode === this.PREV) {
        return this.setState({ page: now - 1, change: true });
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setState({ change: false });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.navigate);
  }

  render() {
    const { location, children } = this.props;

    console.log(location);

    if (this.state.change) {
      return <Redirect push to={`/${this.state.page}/`} />;
    }

    return (
      <div>
        <Swipeable
          onSwipingLeft={this.swipeLeft}
          onSwipingRight={this.swipeRight}
        >
          <Transition location={location}>
            <div id="slide">{children}</div>
          </Transition>
        </Swipeable>
      </div>
    );
  }
}

export default TemplateWrapper;
