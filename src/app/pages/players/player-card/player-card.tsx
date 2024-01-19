// import styles from './player-card.module.css';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useMemo } from 'react';
/* eslint-disable-next-line */
export interface PlayerCardProps {
  name: string;
  id: number;
}

export function PlayerCard(props: PlayerCardProps) {
  const { name, id } = props;
  const imgURL = useMemo(() => {
    return `./images/players/${name
      .toLowerCase()
      .split(' ')
      .join('_')}.jpg`;
  }, [name]);
  return (
    <Box
      key={id}
      position={'relative'}
      aspectRatio={1 / 1}
      rounded={{ base: 22, md: 20, lg: 16, xl: 12 }}
      overflow={'hidden'}
    >
      <Flex
        bgImage={imgURL}
        h={'100%'}
        w={'100%'}
        bgSize={'cover'}
        bgPos={'center'}
        rounded={{ base: 22, md: 20, lg: 16, xl: 12 }}
        align={'flex-end'}
        _hover={{
          cursor: 'pointer',
          transform: 'scale(1.08)',
          transition: 'transform 1s ease-in-out',
        }}
      ></Flex>
      <Heading m={3} position={'absolute'} bottom={0} zIndex={10}>
        {name}
      </Heading>
    </Box>
  );
}

export default PlayerCard;
