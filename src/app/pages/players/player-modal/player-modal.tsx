import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Image,
  VStack,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useAppSelector } from '@hooks';
import Bold from '@components/bold/bold';
import { normalizeSync } from 'normalize-diacritics';
/* eslint-disable-next-line */
export interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerModal(props: PlayerModalProps) {
  const { isOpen, onClose } = props;
  const { hightlightedPlayer } = useAppSelector((state) => state.playersState);
  if (!hightlightedPlayer) return;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW={{
          base: '82vw',
          sm: 350,
          lg: 375,
          xl: 400,
        }}
        overflow={'hidden'}
        rounded={16}
      >
        <ModalCloseButton color={'white'} />
        <ModalBody p={0} mb={5}>
          <VStack
            mx={'auto'}
            align={'start'}
            className="vstack"
            fontSize={'large'}
            spacing={{ base: 1, md: 2, xl: 3 }}
          >
            <Flex m={'auto'}>
              <Image
                src={normalizeSync(`./images/players/${hightlightedPlayer.name
                  .toLowerCase()
                  .split(' ')
                  .join('_')}.jpg`)}
                alt={hightlightedPlayer.name}
                aspectRatio={1 / 1}
                objectFit={'cover'}
              />
            </Flex>

            <Flex pl={'5%'} maxW={{ base: '90%', md: '85%' }} mt={3}>
              <Heading>
                {' '}
                {hightlightedPlayer.name} - {hightlightedPlayer.position}{' '}
              </Heading>
            </Flex>

            <Flex pl={'5%'} maxW={{ base: '90%', md: '85%' }}>
              <Text>
                <Bold>Price: </Bold> {hightlightedPlayer.price} -{' '}
                <Bold>Bought by:</Bold> {hightlightedPlayer.boughtBy}
              </Text>
            </Flex>

            <Flex pl={'5%'} maxW={{ base: '90%', md: '85%' }}>
              <Text>
                <Bold>Played under:</Bold>{' '}
                {hightlightedPlayer.workWith.join(', ')}
              </Text>
            </Flex>

            <Flex pl={'5%'} maxW={{ base: '90%', md: '85%' }}>
              <Text>
                <Bold>Played from</Bold>{' '}
                <Text as="i">{hightlightedPlayer.playFrom} </Text>
                <Bold> to</Bold> <Text as="i">{hightlightedPlayer.playTo || 'Present'}</Text>{' '}
                for a total of{' '}
                <Text as="i">{hightlightedPlayer.numGamesPlayed}</Text> games.
              </Text>
            </Flex>

            <Flex ml={'5%'} mt={5}>
              <Link href={hightlightedPlayer.statURL} isExternal>
                <Button
                  bgColor={'bg.red'}
                  rounded={16}
                  _hover={{ bgColor: 'bg.red2' }}
                  color={'white'}
                  py={3}
                  px={6}
                  fontWeight={600}
                  fontSize={12}
                  lineHeight={1}
                >
                  Learn More
                </Button>
              </Link>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PlayerModal;
