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
    heading,
    btn,
    children,
  } = props;
  const formElementsArray = objToArray(formElements);
  let attachedClasses = [classes.basic];
  switch (addedClassName) {
    case 'login':
      attachedClasses = [...attachedClasses, classes['login-form']];
      break;

    default:
      break;
  }
  return (
    <form className={attachedClasses.join(' ')} onSubmit={submitHandler}>
      {heading && <h3>{heading}</h3>}
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
      {btn ? (
        <Button type="submit" actionStyle="create">
          {btn}
        </Button>
      ) : (
        <Button type="submit" actionStyle="hidden" />
      )}
      {children}
    </form>
  );
};

export default Form;
