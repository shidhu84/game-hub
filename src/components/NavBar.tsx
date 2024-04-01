import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import SwithThemeColor from "./SwithThemeColor";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SwithThemeColor />
    </HStack>
  );
}

export default NavBar;
