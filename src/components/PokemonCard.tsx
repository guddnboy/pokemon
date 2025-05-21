import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api';
import { TypeTag } from './tags/TypeTag';
interface PokemonCardProps {
  id: number;
}

export const PokemonCard = ({ id }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonDetails(id);
      if (data) {
        setPokemon({
          ...data,
          abilities: data.abilities.map((name: string) => ({
            ability: { name },
          })),
          sprites: { front_default: data.sprites },
        });
      }
    };
    fetchData();
  }, [id]);
  return (
    <div
      className={`size-60 m-4 p-4 rounded-md shadow-lg bg-${pokemon?.colorClass} border-2 border-gray-300`}
    >
      <div className="flex justify-between mb-2">
        <TypeTag typeName={pokemon?.genus} />
        <div
          className={`size-6 flex justify-center items-center bg-gray-200 text-${pokemon?.color} border-gray-300 rounded-md shadow-md text-xs font-bold`}
        >
          {pokemon?.order}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          className="bg-transparent border-2 border-gray-300 rounded-xl p-2 shadow-md"
        />
      </div>

      <div
        className={`flex justify-center text-${pokemon?.color} font-bold text-lg`}
      >
        <div className="font-bold text-md">{pokemon?.name}</div>
      </div>
      <div className="flex justify-between">
        {/* <div className="text-sm">height : {pokemon?.height}</div>
        <div className="text-sm">weight : {pokemon?.weight}</div> */}
      </div>
      <div className="mt-2">
        <details className="group">
          <summary className="cursor-pointer text-primary-dark-blue hover:text-primary-dark-yellow transition-colors">
            포켓몬 설명 더보기
          </summary>
          <div className="mt-2 text-sm text-gray-700">
            {pokemon?.flavorText ? pokemon.flavorText : '설명이 없습니다.'}
          </div>
        </details>
      </div>
    </div>
  );
};
