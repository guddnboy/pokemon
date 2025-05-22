import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api';
import { GenusTag } from './tags/GenusTag';
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
          sprites: { front_default: data.sprites },
        });
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="card-container">
      {pokemon && (
        <div
          className={`size-60 m-4 p-4 rounded-md shadow-lg ${pokemon.colorClass} border-2 border-gray-300`}
        >
          <div className="flex justify-between mb-2">
            <GenusTag genus={pokemon.genus} />
            <div
              className={`size-6 flex justify-center items-center bg-gray-200 border-gray-300 rounded-md shadow-md text-xs font-bold`}
            >
              {pokemon.order}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="bg-transparent border-2 border-gray-300 rounded-xl p-2 shadow-md"
            />
          </div>

          <div className={`flex justify-center font-bold text-lg`}>
            <div className="font-bold text-md">{pokemon.name}</div>
          </div>
          <div className="mt-2">
            <details className="group">
              <summary className="cursor-pointer text-primary-dark-blue hover:text-primary-dark-yellow transition-colors">
                포켓몬 설명 더보기
              </summary>
              <div className="mt-2 text-sm text-gray-700">
                {pokemon.flavorText}
              </div>
            </details>
          </div>
        </div>
      )}
    </div>
  );
};
