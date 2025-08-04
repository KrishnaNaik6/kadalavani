import api from './api';

export const getNews = (config) => {
  return api.get('/news/articles?limit=1000', config);
};
export const createNews = (data, config) => {
  return api.post('/news/articles', data, config);
};
export const editNews = (data, config) => {
  console.log('calling pathc');
  return api.patch(`/news/articles/${data.id}`, data.formData, config);
};
