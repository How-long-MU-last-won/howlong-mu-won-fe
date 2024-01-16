import {
  Flex,
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { ManagerObject } from 'src/types';
// import styles from './manager-card-desktop.module.css';

/* eslint-disable-next-line */
export interface ManagerCardDesktopProps {
  manager: ManagerObject;
}

export function ManagerCardDesktop({ manager }: ManagerCardDesktopProps) {
  const {
    trophyWon,
    name,
    DOB,
    numWins,
    numLosses,
    numTies,
    leadFrom,
    leadTo,
    moneySpent,
    statURL,
    shortDesc,
    numPlayersUsed,
  } = manager;

  const imgURL = useMemo(() => {
    return `./images/managers/${name.split(' ').join('_')}.jpg`;
  }, [name]);

  const trophyString = useMemo(() => {
    if (trophyWon.length === 0) {
      return 'No trophies won.';
    } else {
      return `Won ${trophyWon.join(', ')}.`;
    }
  }, [trophyWon]);

  return (
    <Flex
      m={'auto'}
      my={{ lg: 12, xxl: 16 }}
      alignItems={'center'}
      maxW={{ lg: '90vw', xl: '85vw', xxl: '80vw' }}
    >
      <HStack
        spacing={5}
        color={'base.black'}
        align={'flex-start'}
      >
        <Flex w={{ lg: '43vw', xl: '41.5vw', xxl: '39vw' }}>
          <Image src={imgURL} rounded={12} boxSize={'full'} objectFit={'cover'} alt={name} />
        </Flex>
        <VStack
          alignItems={'flex-start'}
          maxW={{ lg: '45vw', xl: '42.5vw', xxl: '40vw' }}
          justify={'end'}
          spacing={5}
          fontSize={{ lg: '0.8rem', xl: '0.9rem', xxl: '1rem' }}
        >
          <Heading as={'h1'}>{name}</Heading>
          <VStack alignItems={'flex-start'} spacing={0}>
            <Text>Born: {DOB}</Text>
            <Text>
              In charge: {leadFrom} - {leadTo}
            </Text>
            <Text>{trophyString}</Text>
            <Text>
              Managed United for a total of {numWins + numLosses + numTies}{' '}
              games, with the record of {numWins} wins, {numLosses} losses, and{' '}
              {numTies} draws.
            </Text>
            <Text>
              Spent €{moneySpent} on transfers and used {numPlayersUsed}{' '}
              players during his tenure.
            </Text>
          </VStack>

          <Text>{shortDesc}</Text>

          <Link href={statURL} isExternal>
            <Button
              bgColor={'bg.red'}
              rounded={25}
              _hover={{ bgColor: 'bg.red2' }}
              color={'white'}
              py={6}
              px={12}
              fontSize={'smaller'}
            >
              Learn More
            </Button>
          </Link>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default ManagerCardDesktop;
