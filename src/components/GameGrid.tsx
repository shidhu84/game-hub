import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';
const gameCardSkeletonList = [1, 2, 3, 4, 5, 6];

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  if (error) return <Text>{error && <Text>{error}</Text>}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding='10px'
    >
      {isLoading &&
        gameCardSkeletonList.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
