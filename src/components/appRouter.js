import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";

import Slide from "../templates/slide";

const AppRouter = ({ components, labels, navLinks, showLinks, ...props }) => {
  const urls = [...Array(components.length)].map((v, i) => `/${i + 1}/`);

  useEffect(() => (navLinks ? navLinks(urls) : ""), []);
  // above does nothing in particular, mainly to test
  // the fact that you can send data back to parents too

  const links = (
    <nav>
      <ul>
        {urls.map((v, i) => (
          <li key={i}>
            <Link to={v}>{labels ? labels[i] : v}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div>
      {showLinks ? links : null}
      <Slide {...props}>
        {components.map((v, i) => (
          <Route key={i} path={urls[i]} exact component={v} />
        ))}
      </Slide>
    </div>
  );
};

export default AppRouter;
