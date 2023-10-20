import React, { useState } from "react";

import Form from "./Form";
import Results from "./Results";
import classes from "./Randomizer.module.css";

function Randomizer() {
  const [gifters, setGifters] = useState([]);

  const defineGifters = (input) => {
   setGifters(input);
  }

  return (
    <div className={classes.randomizer}>
      <div className={classes.divider}>WESH</div>
      <div className={classes.container}>
        <Form defineGifters={defineGifters} />
        <Results gifters={gifters} />
      </div>
    </div>
  );
}

export default Randomizer;
