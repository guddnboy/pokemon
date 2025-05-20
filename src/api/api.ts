import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  headers: { 'X-Custom-Header': 'foobar' },
});

export const getAllPokemons = async () => {
  try {
    const response = await instance.get('pokemon/');
    return response.data;
  } catch (error) {
    // [TODO] 에러 핸들링 작업 필요
    console.error(error);
    throw error;
  }
};
