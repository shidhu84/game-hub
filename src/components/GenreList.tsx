import React from 'react';
import useGenres, { Genre } from '../hooks/useGenres';
import {
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onGenreSelect }: Props) {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
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
                fit='cover'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                fontSize='lg'
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
    </>
  );
}

export default GenreList;
