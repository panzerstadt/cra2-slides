import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./transition.css";

class Transition extends React.PureComponent {
  render() {
    const { children, location, timeout = 500 } = this.props;

    return (
      <TransitionGroup component="main">
        <CSSTransition
          key={location.pathname}
          timeout={timeout}
          classNames="fade"
          appear
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
