import React, { forwardRef } from 'react';
import classes from './inputItem.module.scss'

const InputItem = (props, ref) => {

  const { label, placeholder, type, name, ...otherPros } = props;

  return (
    <div className={`${classes.inputItem} shadow`}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} ref={ref} placeholder={placeholder} {...otherPros} />
    </div>
  );
};

export default forwardRef(InputItem);