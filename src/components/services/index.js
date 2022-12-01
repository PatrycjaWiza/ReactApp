import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/people/';

export const fetchPeople = async page => {
  const result = await axios.get(`${page}/`);
  return result.data.name;
};
