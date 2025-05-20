import axios from 'axios';

const instance = axios.create({
  method: 'get',
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
