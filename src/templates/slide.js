import React from "react";
import Layout from "../components/layout";

export default ({ children, transition, ...props }) => (
  <Layout {...props}>
    <div style={transition && transition.style}>{children}</div>
  </Layout>
);
