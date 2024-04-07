import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import SwithThemeColor from './SwithThemeColor';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({onSearch}: Props) {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch}/>
      <SwithThemeColor />
    </HStack>
  );
}

export default NavBar;
