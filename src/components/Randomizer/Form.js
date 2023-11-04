import React, { useState } from "react";

import classes from "./Form.module.css";

function Form(props) {
  const [inputForm, setInputForm] = useState("");
  const [inputGifters, setInputGifters] = useState([]);

  const inputChangeHandler = (event) => {
    setInputForm(event.target.value);
  };

  const sendGifters = (event) => {
    event.preventDefault();
    const inputFormEdit = inputForm + "\n";
    const newGifters = inputFormEdit.trim().split(/\n/);
    setInputGifters(newGifters);
    props.defineGifters(newGifters);
    window.scrollTo(0, document.documentElement.scrollHeight);
  };

  return (
    <form onSubmit={sendGifters}>
      <div className={classes.explanation}>
        <h1>Secret Santa Organizer</h1>
        <p>
          Write down one person per line in the input below and click on
          Randomize
        </p>
      </div>
      <textarea
        name="gifters"
        onChange={inputChangeHandler}
        value={inputForm}
      ></textarea>
      <input type="submit" className={classes.button} value="Randomize"></input>
    </form>
  );
}

export default Form;
