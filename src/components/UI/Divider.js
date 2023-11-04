import React from "react";

import classes from "./Divider.module.css";

function Divider(props) {
  return (
    <div
      className={classes.divider}
      style={{ backgroundPosition: `${props.random}px` }}
    ></div>
  );
}

export default Divider;
