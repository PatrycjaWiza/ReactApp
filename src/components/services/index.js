import axios from 'axios';

export const fetchPeople = async page => {
  axios.defaults.baseURL = 'https://swapi.py4e.com/api/';
  const result = await axios.get(`people/${page}/`);

  return result.data;
};
