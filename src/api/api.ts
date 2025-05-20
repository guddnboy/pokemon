import instance from './axios';

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
