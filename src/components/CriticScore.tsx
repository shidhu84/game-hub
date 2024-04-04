import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const colorValue = score > 90 ? 'green' : score > 80 ? 'yellow' : '';
  return (
    <Badge colorScheme={colorValue} paddingX={2}>
      {score}
    </Badge>
  );
}

export default CriticScore;
