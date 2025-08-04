import '@/index.css';
import { render } from '@testing-library/react';
import propTypes from 'prop-types';
import React from 'react';

const AllTheProviders = ({ children }) => {
  return <>{children}</>;
};

AllTheProviders.propTypes = {
  children: propTypes.node.isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
