import api from './api-config';



export const getAllSurfboards = async () => {
  const resp = await api.get('/surfboards');
  return resp.data;
};
export const getOnesurfboard = async (id) => {
  const resp = await api.get(`/surfboards/${id}`);
  return resp.data;
};