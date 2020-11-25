import React, { useState, useEffect } from "react";

import Input from "./Input";

const Form = (props) => {
  const [formElements, setFormElements] = useState();

  useEffect(() => {
    setFormElements(props.formElements);
  }, [props.formElements]);

  const formElementsArray = [];

  for (let key in formElements) {
    formElementsArray.push({
      id: key,
      config: formElements[key],
    });
  }
  console.log(formElementsArray);
  const inputChangedHandler = (e, inputIdentifier) => {
    console.log("Input Changed", e, inputIdentifier);
  };
  return (
    <form onSubmit={props.loginHandler}>
      <input type="text" name="email" value={} />
    </form>
  );
};

export default Form;

// note: Finish Input validation and types. Binding values. Check if displays correectly. Add Styles
