import React from 'react';

import Input from '../Input/Input';
import classes from './Form.module.css';

const Form = (props) => {
  const { submitHandler, formElementsArray, changedHandler } = props;
  return (
    <form className={classes.Form} onSubmit={submitHandler}>
      {formElementsArray.map((el) => (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          changed={changedHandler}
          label={el.config.label}
          invalid={el.config.error}
          options={el.config.options}
        />
      ))}
      <input type="submit" value="Create Session" />
    </form>
  );
};

export default Form;
