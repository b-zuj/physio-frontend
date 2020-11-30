import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let attachedClasses = [classes.basic];

  switch (props.actionStyle) {
    case 'add':
      attachedClasses = [...attachedClasses, classes.primary];
      break;
    case 'edit':
      attachedClasses = [...attachedClasses, classes.edit];
      break;
    case 'delete':
      attachedClasses = [...attachedClasses, classes.secondary];
      break;
    case 'create':
      attachedClasses = [...attachedClasses, classes.create];
      break;
    case 'cancel':
      attachedClasses = [...attachedClasses, classes.cancel];
      break;
    case 'link':
      attachedClasses = [...attachedClasses, classes.default];
      break;
    case 'lowPriority':
      attachedClasses = [...attachedClasses, classes.lowPriority];
      break;
    case 'details':
      attachedClasses = [...attachedClasses, classes.details];
      break;

    default:
      break;
  }
  return (
    <button
      className={attachedClasses.join(' ')}
      onClick={props.action}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
