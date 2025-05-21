import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api';

interface PokemonCardProps {
  id: number;
}

interface Pokemon {
  name: string;
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
      <div>id : {pokemon?.id}</div>
      <div>height : {pokemon?.height}</div>
      <div>weight : {pokemon?.weight}</div>
    </div>
  );
};
