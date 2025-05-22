import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
export const Pokedex = () => {
  const [pokemonIdList, setPokemonIdList] = useState<number[]>(
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
  );

  const generateRandomPokemonId = () => {
    // [FIXME] 무한 스크롤 추가 시 수정 필요
    const randomIds = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setPokemonIdList(randomIds);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <button
        className="my-2 col-span-full justify-self-center cursor-pointer bg-primary-dark-blue hover:bg-primary-dark-yellow text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        type="button"
        onClick={() => generateRandomPokemonId()}
      >
        새로운 포켓몬
      </button>
      {pokemonIdList.map((id, index) => (
        <div key={index} className="flex justify-center items-center">
          <PokemonCard id={id} />
        </div>
      ))}
    </div>
  );
};
