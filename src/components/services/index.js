import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.py4e.com/api/';

// fetching data
export const fetchPeople = async page => {
  const result = await axios.get(`people/${page}/`);

  return result.data;
};

// registration
const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const register = credentials => async () => {
  try {
    const { data } = await axios.post('people/1/', credentials);
    setAuthToken(data.token);
    //registersuccess
  } catch (error) {
    console.error(error);
  }
};
