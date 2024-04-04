import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
const gameCardSkeletonList = [1, 2, 3, 4, 5, 6];

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding='10px'
      >
        {isLoading &&
          gameCardSkeletonList.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
