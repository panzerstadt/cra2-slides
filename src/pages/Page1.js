import React, { useState } from "react";

// styles
import styles from "./Page1.module.css";

// components

const TemplatePage = () => {
  return (
    <div>
      <h1>hey there my good friend!</h1>
      <sup className={styles.highlight}>*</sup>
      <sup>#</sup>very dangerous talk coming up!
    </div>
  );
};

export default TemplatePage;
