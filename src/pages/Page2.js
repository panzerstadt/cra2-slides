import React, { useState } from "react";

// styles
import styles from "./Page2.module.css";

// components

const TemplatePage = () => {
  return (
    <div>
      <h2>woo page 2!</h2>
      <sup className={styles.highlight}>*</sup>
      <sup>#</sup>very dangerous talk coming up!
    </div>
  );
};

export default TemplatePage;
