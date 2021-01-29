import React from 'react';
import './skeleton.css';

const SkeletonElement = ({ type, styleClass }) => {
  let classes = `skeleton ${type}`;
  if (styleClass) {
    classes += ' ' + styleClass;
  }
  return <div className={classes}></div>;
};

export default SkeletonElement;
