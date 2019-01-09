import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import "./header.module.css";

import Time from "./time";
import logo from "../logo.svg";

export default ({ labels, links }) => (
  <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />
    {/* <Time format="HH:mm:ss" /> */}
    <div>
      {links.map((v, i) => (
        <Link key={i} to={v}>
          <code className={styles.links}>{labels[i]}</code>
        </Link>
      ))}
    </div>
  </header>
);
