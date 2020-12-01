import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './Form.module.css';

import { objToArray } from '../../utils/formHelpers';

const Form = props => {
  const {
    submitHandler,
    changedHandler,
    formElements,
    addedClassName,
    submitBtn,
  } = props;
  const formElementsArray = objToArray(formElements);
  const attachedClasses = [classes.basic];
  switch (addedClassName) {
    case 'login':
      attachedClasses = [...attachedClasses, addedClassName];
      break;

    default:
      break;
  }
  return (
    <form className={classes.Form} onSubmit={submitHandler}>
      {formElementsArray.map(el => (
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
      <Button type="submit" action={submitHandler} actionStyle="hidden" />
    </form>
  );
};

export default Form;
