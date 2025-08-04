import React, { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const []
  return (
    <AppContext.Provider value={{ Appenticated, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export const useApp = () => useContext(AppContext);
