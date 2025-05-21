import instance from './axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonDetails = async (id: number) => {
  try {
    const defaultPokemon = await getDefaultPokemonDetails(id);
    const koreanPokemon = await getKoreanPokemonData(id);
    return {
      ...defaultPokemon,
      ...koreanPokemon,
    };
  } catch (error) {
    console.error('포켓몬 상세 정보 조회 실패:', error);
    throw error;
  }
};

const getKoreanPokemonData = async (
  id: number
): Promise<PokemonKoreanDetails> => {
  try {
    const response = await instance.get(`${BASE_URL}pokemon-species/${id}`);
    const koreanGenus: { genus: string } = response.data.genera.find(
      (genus: { language: { name: string } }) => genus.language.name === 'ko'
    );
    const color: string = response.data.color.name;
    const colorMap: { [key: string]: string } = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      brown: 'bg-brown-500',
      gray: 'bg-gray-500',
      white: 'bg-white-500',
      black: 'bg-black-500',
    };
    const colorClass = colorMap[color] || 'bg-gray-500';
    const koreanName: { name: string } = response.data.names.find(
      (name: { language: { name: string } }) => name.language.name === 'ko'
    );
    const koreanFlavor: { flavor_text: string } =
      response.data.flavor_text_entries.find(
        (flavor: { language: { name: string } }) =>
          flavor.language.name === 'ko'
      );

    if (!koreanName || !koreanGenus || !koreanFlavor) {
      throw new Error('한국어 데이터를 찾을 수 없습니다.');
    }

    return {
      name: koreanName.name,
      genus: koreanGenus.genus,
      order: response.data.order,
      color: response.data.color.name,
      colorClass: colorClass,
      flavorText: koreanFlavor.flavor_text.replace(/[\r\n]/g, ' '),
    };
  } catch (error) {
    console.error('포켓몬 한국어 데이터 조회 실패:', error);
    throw error;
  }
};

const getDefaultPokemonDetails = async (
  id: number
): Promise<PokemonDefaultDetails> => {
  try {
    const response = await instance.get(`${BASE_URL}pokemon/${id}`);
    const abilities = response.data.abilities.map(
      (ability: { ability: { name: string } }) => ability.ability.name
    );
    const height = response.data.height;
    const weight = response.data.weight;
    const sprites = response.data.sprites.front_default;
    const types = response.data.types.map(
      (type: { type: { name: string } }) => type.type.name
    );

    if (!sprites) {
      throw new Error('포켓몬 이미지를 찾을 수 없습니다.');
    }

    return {
      abilities,
      height,
      weight,
      sprites,
      types,
    };
  } catch (error) {
    console.error('포켓몬 기본 데이터 조회 실패:', error);
    throw error;
  }
};
