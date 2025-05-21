import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api';
import { AbilitiesTag } from './tags/AbilitiesTag';
import { TypeTag } from './tags/TypeTag';
interface PokemonCardProps {
  id: number;
}

export const PokemonCard = ({ id }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonDetails(id);
      console.log(data);
      if (data) {
        setPokemon({
          ...data,
          abilities: data.abilities.map((name: string) => ({
            ability: { name },
          })),
          sprites: { front_default: data.sprites },
          moves: {
            name: Array.isArray(data.moves) ? data.moves[0] : data.moves,
          },
        });
      }
    };
    fetchData();
  }, [id]);
  return (
    <div
      className={`m-4 p-4 rounded-md shadow-lg ${pokemon?.colorClass} border-2 border-gray-300`}
    >
      <div className="flex justify-between">
        <div className="text-primary-dark-red font-bolf text-2xl">
          {pokemon?.name}
        </div>
        <div className="bg-primary-dark-blue text-primary-bright-yellow border-2 border-gray-300 rounded-md px-2">
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
      <div>
        <TypeTag typeName={pokemon?.genus} />
      </div>

      <div className="flex justify-between">
        <div>키 : {pokemon?.height}</div>
        <div>몸무게 : {pokemon?.weight}</div>
      </div>
      <div className="flex justify-center">{pokemon?.moves.name}</div>
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
