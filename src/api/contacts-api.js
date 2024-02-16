import authInstance from './auth-api';

export const fetchContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const addContacts = async body => {
  const { data } = await authInstance.post('/contacts', body);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
