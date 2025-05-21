import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
export const Pokedex = () => {
  const [pokemonIdList, setPokemonIdList] = useState<number[]>(
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1)
  );

  const generateRandomPokemonId = () => {
    // [FIXME] 무한 스크롤 추가 시 수정 필요
    const randomId = Math.floor(Math.random() * 100) + 1;
    setPokemonIdList(prevIds => {
      if (prevIds.length >= 50) {
        return prevIds.slice(1).concat(randomId);
      }
      return [...prevIds, randomId];
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      <button onClick={generateRandomPokemonId}>Generate Random Pokemon</button>
      {pokemonIdList.map((id, index) => (
        <PokemonCard key={index} id={id} />
      ))}
    </div>
  );
};
