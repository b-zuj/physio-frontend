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

    default:
      break;
  }
  return (
    <button className={attachedClasses.join(' ')}>{props.children}</button>
  );
};

export default Button;
