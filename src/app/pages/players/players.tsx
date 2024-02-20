import {
  Box,
  Container,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import PlayerModal from './player-modal/player-modal';

import PlayerContainerByPosition from './player-container-by-position/player-container-by-position';
import { useAppSelector } from '../../../hooks';
import { Search2Icon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface PlayersProps {}
const POSITIONS = [
  { positionName: 'GOALKEEPERS', position: 'GK' },
  { positionName: 'DEFENDERS', position: 'DF' },
  { positionName: 'MIDFIELDERS', position: 'MF' },
  { positionName: 'FORWARDS', position: 'FW' },
];

export function Players(props: PlayersProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isPlayersLoading } = useAppSelector((state) => state.playersState);

  return (
    <Container
      maxW={{
        base: '100%',
        md: '96vw',
        lg: '80vw',
      }}
      mx={'auto'}
      p={0}
      my={12}
    >
      <Box mt={36}>
        <Heading>We spent more than a billion on players</Heading>
        <Heading as="h2" size="md" my={4}>
          But what did we get ...
        </Heading>
      </Box>
      <Box
        pos={'fixed'}
        zIndex={5000}
        top={'3.75rem'}
        w={'100vw'}
        right={0}
        h={'3.75rem'}
        background={'white'}
      >
        <FormControl
          pos={'fixed'}
          left={'50%'}
          transform={'translateX(-50%)'}
          w={'80vw'}
          h={'3.75rem'}
        >
          <InputGroup
            maxW={{
              base: '60vw',
              lg: '40vw',
              xl: '20vw',
            }}
            pos={'fixed'}
            zIndex={9999}
            top={'0.85rem'}
          >
            <InputLeftElement>
              <Search2Icon />
            </InputLeftElement>
            <Input
              type="string"
              variant="flushed"
              placeholder="Search"
              focusBorderColor={'bg.red'}
              disabled={isPlayersLoading}
            />
          </InputGroup>
        </FormControl>
      </Box>
      {isPlayersLoading ? (
        <Spinner
          borderWidth={6}
          speed="0.8s"
          display={'block'}
          className="spinner"
          mx={'auto'}
          color="bg.red"
          size={'xl'}
        />
      ) : (
        POSITIONS.map((position) => (
          <PlayerContainerByPosition
            key={position.position}
            positionName={position.positionName}
            position={position.position}
            onOpen={onOpen}
          />
        ))
      )}

      <PlayerModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

export default Players;
