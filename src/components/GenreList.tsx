import React from 'react';
import useGenres, { Genre } from '../hooks/useGenres';
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Props {
  onGenreSelect: (genre: Genre) => void;
}

function GenreList({ onGenreSelect }: Props) {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
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
            <Button
              fontSize='lg'
              variant='link'
              onClick={() => {
                onGenreSelect(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
