// import styles from './manager-card-mobile.module.css';
import { useMemo } from 'react';
import { ManagerObject } from 'src/types';
import {
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import { Bold } from '../../../components/bold/bold';

/* eslint-disable-next-line */
export interface ManagerCardMobileProps {
  manager: ManagerObject;
}

export function ManagerCardMobile({ manager }: ManagerCardMobileProps) {
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
      return `He won ${trophyWon.join(', ')}`;
    }
  }, [trophyWon]);

  return (
    <Flex m={'auto'} my={16} alignItems={'center'} maxW={'95vw'}>
      <VStack spacing={5} color={'base.black'} align={'flex-start'}>
        <Flex maxW={'95vw'}>
          <Image src={imgURL} rounded={12} boxSize="full" alt={name} />
        </Flex>
        <VStack
          alignItems={'flex-start'}
          maxW={'95vw'}
          justify={'end'}
          spacing={5}
          fontSize={{'base': '0.8rem','sm': '0.85rem', 'md': '1rem'}}
        >
          <Heading as={'h1'}>{name}</Heading>
          <VStack alignItems={'flex-start'} spacing={0}>
            <Text><Bold>Born:</Bold> {DOB}</Text>
            <Text>
              <Bold>In charge:</Bold> {leadFrom} - {leadTo}
            </Text>
            <Text>{trophyString}</Text>
            <Text>
              He managed United for a total of {numWins + numLosses + numTies}{' '}
              games, with the record of {numWins} wins, {numLosses} losses, and{' '}
              {numTies} draws.
            </Text>
            <Text>
              He spent {moneySpent} on transfers and used {numPlayersUsed}{' '}
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
      </VStack>
    </Flex>
  );
}

export default ManagerCardMobile;
