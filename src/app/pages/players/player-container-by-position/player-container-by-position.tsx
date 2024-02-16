import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import PlayerCard from '../player-card/player-card';
import { useAppSelector } from '../../../../hooks';

/* eslint-disable-next-line */
export interface PlayerContainerByPositionProps {
  positionName: string;
  position: string;
  onOpen: () => void;
}

export function PlayerContainerByPosition(
  props: PlayerContainerByPositionProps
) {
  const { positionName, position, onOpen } = props;
  const { players } = useAppSelector((state) => state.playersState);
  return (
    <Box mx={{ base: '10vw', md: '6vw', xxl: '8vw' }}>
      <Heading
        my={12}
        as={'h3'}
        fontFamily={`'Montserrat', sans-serif;`}
        paddingBottom={'10px'}
        w={'100%'}
        borderBottom={'1px solid #d9d9d9'}
      >
        {positionName}
      </Heading>
      <SimpleGrid
        minChildWidth={{ md: '30vw', lg: '24vw', xl: '20vw', xxl: '18vw' }}
        spacing={{ base: '4vw', md: '2vw', lg: '1.5vw' }}
      >
        {players.filter((player) => player.position === position).map((player) => {
          return <PlayerCard player={player} key={player.id} onOpen={onOpen} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export default PlayerContainerByPosition;
