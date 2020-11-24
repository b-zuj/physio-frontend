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
      {formElementsArray.length > 0 &&
        formElementsArray.map((element) => {
          const {
            elementType,
            elementConfig,
            value,
            valid,
            validation,
            touched,
          } = element.config;
          return (
            <Input
              key={element.id}
              elementType={elementType}
              elementConfig={elementConfig}
              value={value}
              invalid={!valid}
              shouldValidate={validation}
              touched={touched}
            />
          );
        })}
    </form>
  );
};

export default Form;

// note: Finish Input validation and types. Binding values. Check if displays correectly. Add Styles
