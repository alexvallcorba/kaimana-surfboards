import api from './api-config';

export const getAllCustoms = async () => {
  const resp = await api.get('/customs');
  return resp.data;
};

export const getOneCustom = async (id) => {
  const resp = await api.get(`/customs/${id}`);
  return resp.data;
};

export const postCustom = async (customData) => {
  const resp = await api.post('/customs', { custom: customData });
  return resp.data;
};

export const deleteCustom = async (id) => {
  const resp = await api.delete(`/customs/${id}`);
  return resp;
};

export const putCustom = async (id, customData) => {
  const resp = await api.put(`/customs/${id}`, { custom: customData });
  return resp.data;
};

