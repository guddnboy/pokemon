import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api';
import { AbilitiesTag } from './tags/AbilitiesTag';
import { TypeTag } from './tags/TypeTag';
interface PokemonCardProps {
  id: number;
}

interface Pokemon {
  sprites: {
    front_default: string;
  };
  name: string;
  abilities: { ability: { name: string } }[];
  order: number;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  genus: string;
  moves: { name: string };
}

export const PokemonCard = ({ id }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonDetails(id);
      setPokemon(data);
      console.log(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="m-4 p-4 bg-gray-200 rounded-md">
      <div className="flex justify-between">
        <div>{pokemon?.name}</div>
        <div>도감 번호 : {pokemon?.order}</div>
      </div>
      <div className="flex justify-center">
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      <div>{pokemon?.genus}</div>

      <div className="flex justify-between">
        <div>키 : {pokemon?.height}</div>
        <div>몸무게 : {pokemon?.weight}</div>
      </div>
      <div className="flex justify-center">{pokemon?.moves.name}</div>
      <div className="flex">
        Types :
        {pokemon?.types.map((type, index) => (
          <TypeTag key={index} typeName={type.type.name} />
        ))}
      </div>
      <div className="flex overflow-x-auto text-xs">
        {pokemon?.abilities.map((ability, index) => (
          <AbilitiesTag key={index} abilitiesName={ability.ability.name} />
        ))}
      </div>
      <div className="mt-4">
        <details className="group">
          <summary className="cursor-pointer text-primary-dark-blue hover:text-primary-dark-yellow transition-colors">
            포켓몬 설명 더보기
          </summary>
        </details>
      </div>
    </div>
  );
};
