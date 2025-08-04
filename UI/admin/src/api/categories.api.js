import api from './api';

export const getCategories = (config) => {
  return api.get('/news/categories?limit=1000', config);
};
export const createCategories = (data, config) => {
  return api.post('/news/categories', data, config);
};
export const editCategories = (data, config) => {
  console.log('calling pathc');
  return api.patch(`/news/categories/${data.id}`, data, config);
};
