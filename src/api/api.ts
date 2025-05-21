import instance from './axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonDetails = async (id: number) => {
  try {
    const response = await instance.get(`${BASE_URL}/pokemon/${id}`);
    const koreanName = await getKoreanName(id);
    const koreanGenus = await getKoreanGenus(id);
    const koreanMove = await getKoreanMove(id);
    return {
      ...response.data,
      name: koreanName,
      genus: koreanGenus,
      moves: koreanMove,
    };
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

const getKoreanName = async (id: number) => {
  try {
    const response = await instance.get(`${BASE_URL}/pokemon-species/${id}`);
    const koreanData = response.data.names.find(
      (name: { language: { name: string } }) => name.language.name === 'ko'
    );
    return koreanData.name;
  } catch (error) {
    // [TODO] 에러 핸들링 작업 필요
    console.error(error);
  }
};

const getKoreanGenus = async (id: number) => {
  try {
    const response = await instance.get(`${BASE_URL}/pokemon-species/${id}`);
    const koreanGenus = response.data.genera.find(
      (genus: { language: { name: string } }) => genus.language.name === 'ko'
    );
    return koreanGenus.genus;
  } catch (error) {
    // [TODO] 에러 핸들링 작업 필요
    console.error(error);
  }
};

const getKoreanMove = async (id: number) => {
  const response = await instance.get(`${BASE_URL}/move/${id}`);
  const moves = response.data;
  const koreanMoves = moves.names.find(
    (name: { language: { name: string } }) => name.language.name === 'ko'
  );
  return {
    name: koreanMoves.name,
  };
};
