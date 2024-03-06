import { Box, Button, Collapse, SimpleGrid } from '@chakra-ui/react';
import PlayerCard from '../player-card/player-card';
import { PlayerObject } from '@/types';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useAppSelector, useAppDispatch } from '@hooks';
import { setDisplayPlayerSection } from '@/redux/slices/players/players.slice';

/* eslint-disable-next-line */
export interface PlayerContainerByPositionProps {
  positionName: string;
  position: string;
  onOpen: () => void;
  players: PlayerObject[];
}

export function PlayerContainerByPosition(
  props: PlayerContainerByPositionProps
) {
  const dispatch = useAppDispatch();
  const { displayPlayerSection } = useAppSelector((state) => state.playersState);
  const { positionName, position, onOpen, players } = props;

  const handleClick = () => {
    dispatch(
      setDisplayPlayerSection({
        ...displayPlayerSection,
        [position]: !displayPlayerSection[position],
      })
    );
  };

  return (
    <Box>
      <Button
        my={12}
        fontFamily={`'Montserrat', sans-serif;`}
        paddingBottom={'10px'}
        fontSize={'2rem'}
        background={'transparent'}
        justifyContent={'flex-start'}
        w={'100%'}
        borderBottom={'1px solid #d9d9d9'}
        onClick={handleClick}
        _hover={{
          background: 'transparent',
          color: 'bg.red',
        }}
      >
        {displayPlayerSection[position] ? (
          <ChevronDownIcon boxSize={'2.5rem'} />
        ) : (
          <ChevronRightIcon boxSize={'2.5rem'} />
        )}
        {positionName}
      </Button>
      <Collapse in={displayPlayerSection[position]} animateOpacity>
        <SimpleGrid
          minChildWidth={{ md: '30vw', lg: '24vw', xl: '20vw', xxl: '18vw' }}
          spacing={{ base: '4vw', md: '2vw', lg: '1.5vw' }}
        >
          {players
            .filter((player) => player.position === position)
            .map((player) => {
              return (
                <PlayerCard player={player} key={player.id} onOpen={onOpen} />
              );
            })}
        </SimpleGrid>
      </Collapse>
    </Box>
  );
}

export default PlayerContainerByPosition;
