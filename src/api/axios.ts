import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
