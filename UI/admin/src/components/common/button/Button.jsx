import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { children, ...buttonProps } = props;
  return <button {...buttonProps}>{children}</button>;
};

Button.propTypes = {
  children: propTypes.node.isRequired,
};

export default Button;
