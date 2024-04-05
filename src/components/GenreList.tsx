import React from 'react';
import useGenres from '../hooks/useGenres';
import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem>
            <SkeletonText />
          </ListItem>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
