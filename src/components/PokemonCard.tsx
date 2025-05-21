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
  id: number;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
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
      <div>name : {pokemon?.name}</div>
      <div>
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      <div>id : {pokemon?.id}</div>
      <div>height : {pokemon?.height}</div>
      <div>weight : {pokemon?.weight}</div>
      <div className="flex">
        Abilities :
        {pokemon?.abilities.map((ability, index) => (
          <AbilitiesTag key={index} abilitiesName={ability.ability.name} />
        ))}
      </div>
      <div className="flex">
        Types :
        {pokemon?.types.map((type, index) => (
          <TypeTag key={index} typeName={type.type.name} />
        ))}
      </div>
    </div>
  );
};
