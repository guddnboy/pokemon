import { useRef, useState, useEffect } from 'react';
import { PokemonCard } from './PokemonCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

export const Pokedex = () => {
  const [pokemonIdList, setPokemonIdList] = useState<number[]>(
    Array.from({ length: 20 }, (_, index) => index + 1)
  );
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePokemon = () => {
    if (isLoading) return;
    setIsLoading(true);
    const lastId = pokemonIdList[pokemonIdList.length - 1];
    const newIds = Array.from({ length: 20 }, (_, index) => lastId + index + 1);
    setPokemonIdList(prev => [...prev, ...newIds]);
    setIsLoading(false);
  };

  const fetchMorePokemon = useRef<HTMLDivElement>(null);
  const intersecting = useInfiniteScroll(fetchMorePokemon);

  useEffect(() => {
    if (intersecting && !isLoading) {
      loadMorePokemon();
    }
  }, [intersecting, isLoading]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonIdList.map((id, index) => (
        <div key={index} className="flex justify-center items-center">
          <PokemonCard id={id} />
        </div>
      ))}
      <div
        ref={fetchMorePokemon}
        className="col-span-full h-10 flex justify-center items-center"
      >
        {/* [TODO] 로딩 컴포넌트 추가 예정 */}
        {isLoading && <div className="text-gray-600">로딩 중...</div>}
      </div>
    </div>
  );
};
