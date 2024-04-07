import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>{`${
      gameQuery?.platform?.name || ''
    } ${gameQuery.genre?.name || ''} Games`}</Heading>
  );
}

export default GameHeading;
