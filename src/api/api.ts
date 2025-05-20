import instance from './axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonDetails = async (id: number) => {
  try {
    const response = await instance.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    // [TODO] 에러 핸들링 작업 필요
    console.error(error);
    throw error;
  }
};

export const getUrlData = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    // [TODO] 에러 핸들링 작업 필요
    console.error(error);
  }
};
