import React, { useState } from 'react';

import classes from './Form.module.css';

function Form(props) {
   const [inputForm, setInputForm] = useState('');
   const [inputGifters, setInputGifters] = useState([]);

   const inputChangeHandler = (event) => {
      setInputForm(event.target.value);
   }

   const sendGifters = (event) => {
      event.preventDefault();
      const inputFormEdit = inputForm + '\n';
      const newGifters = inputFormEdit.trim().split(/\n/); 
      setInputGifters(newGifters);
      props.defineGifters(newGifters);
   }

   return <form onSubmit={sendGifters}>
      <textarea name="gifters" onChange={inputChangeHandler} rows="20" value={inputForm}></textarea>
      <input type='submit'></input>
   </form>
}

export default Form;