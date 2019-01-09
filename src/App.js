import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// styles
import styles from "./App.module.css";

// components
import AppRouter from "./components/appRouter";
import Header from "./components/header";

// pages
import Home from "./pages/LoginPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const data = {
  pages: [Home, Page1, Page2],
  labels: ["1", "2", "3"]
};

class App extends Component {
  state = {
    links: []
  };
  navLinks = this.navLinks.bind(this);

  navLinks(urls) {
    this.setState({ links: urls });
  }

  render() {
    return (
      <div className={styles.app}>
        <Header labels={data.labels} links={this.state.links} />
        <AppRouter
          components={data.pages}
          labels={data.labels}
          navLinks={this.navLinks}
          {...this.props}
        />
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);
