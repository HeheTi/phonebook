const BASE_URL = 'https://61c4e654f1af4a0017d9985c.mockapi.io';

const ENDPOINT = '/contacts-list';

const fetchContacts = async (endpoint = '/', options = {}) => {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const getContacts = () => fetchContacts(ENDPOINT);

export const addContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetchContacts(ENDPOINT, options);
};

export const removeContact = id => {
  const options = {
    method: 'DELETE',
  };

  return fetchContacts(`${ENDPOINT}/${id}`, options);
};
