import api from './api';

export const getTags = (config) => {
  return api.get('/news/tags?limit=1000', config);
};
export const createTags = (data, config) => {
  return api.post('/news/tags', data, config);
};
export const editTags = (data, config) => {
  console.log('calling pathc');
  return api.patch(`/news/tags/${data.id}`, data, config);
};
