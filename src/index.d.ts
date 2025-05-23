type Pokemon = {
  name: string;
  order: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  genus: string;
  color: string;
  colorClass: string;
  flavorText: string;
  types: string[];
};

type PokemonKoreanDetails = {
  name: string;
  genus: string;
  order: number;
  color: string;
  colorClass: string;
  flavorText: string;
};
type PokemonDefaultDetails = {
  abilities: string[];
  height: number;
  weight: number;
  sprites: string;
  types: string[];
};
