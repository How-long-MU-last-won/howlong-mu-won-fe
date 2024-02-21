// import styles from './player-card.module.css';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useMemo } from 'react';
import { PlayerObject } from 'src/types';
import { useAppDispatch } from '../../../../hooks';
import { setHighlightedPlayer } from '../../../../redux/slices/players/players.slice';
import { normalizeSync } from 'normalize-diacritics';
/* eslint-disable-next-line */
export interface PlayerCardProps {
  player: PlayerObject;
  onOpen: () => void;
}

export function PlayerCard(props: PlayerCardProps) {
  const { player, onOpen } = props;
  const { id, name } = player;
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setHighlightedPlayer(player));
    onOpen();
  };

  const imgURL = useMemo(() => {
    return normalizeSync(`./images/players/${name
      .toLowerCase()
      .split(' ')
      .join('_')}.jpg`);
  }, [name]);
  return (
    <Box
      key={id}
      position={'relative'}
      maxW={{ md: '100%', lg: '42vw', xl: '30vw', xxl: '20vw' }}
      aspectRatio={1 / 1}
      rounded={{ base: 22, md: 20, lg: 16, xl: 12 }}
      overflow={'hidden'}
      onClick={onClick}
      _hover={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 1px 5px 10px 2px',
      }}
    >
      <Flex
        bgImage={imgURL}
        h={'100%'}
        w={'100%'}
        bgSize={'cover'}
        bgPos={'center'}
        rounded={{ base: 22, md: 20, lg: 16, xl: 12 }}
        boxShadow={'inset rgba(0, 0, 0, 0.72) 0px -24px 36px 18px'}
        align={'flex-end'}
        _hover={{
          cursor: 'pointer',
          transform: 'scale(1.08)',
          transition: 'transform 1s ease-in-out',
        }}
      />
      <Heading m={3} position={'absolute'} bottom={0} zIndex={10} color={'white'}>
        {name}
      </Heading>
    </Box>
  );
}

export default PlayerCard;
