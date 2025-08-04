export const getCyConfigValue = (key) => {
  const config = Cypress.config();
  if (!config[key]) {
    throw new Error(`Cypress config ${key} not found.`);
  }

  return config[key];
};
