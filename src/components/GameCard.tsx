import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody fontSize="2xl">{game.name}</CardBody>
    </Card>
  );
}

export default GameCard;
