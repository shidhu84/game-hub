import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import SwithThemeColor from './SwithThemeColor';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <SwithThemeColor />
    </HStack>
  );
}

export default NavBar;
