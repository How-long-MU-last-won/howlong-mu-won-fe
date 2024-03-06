import {
  Box,
  Container,
  Heading,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import PlayerModal from './player-modal/player-modal';
import PlayerContainerByPosition from './player-container-by-position/player-container-by-position';
import { useAppSelector } from '@hooks';
import { useGetPlayersQuery } from '@/redux/slices/api/api.slice';
import { PlayerObject } from '@/types';
import PlayerSeach from './player-seach/player-seach';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface PlayersProps {}
const POSITIONS = [
  { positionName: 'GOALKEEPERS', position: 'GK' },
  { positionName: 'DEFENDERS', position: 'DF' },
  { positionName: 'MIDFIELDERS', position: 'MF' },
  { positionName: 'FORWARDS', position: 'FW' },
];

const filterPlayersByName = (players: PlayerObject[], searchString: string) => {
  return players.filter((player) =>
    player.name.toLowerCase().includes(searchString.toLowerCase())
  );
};

export function Players(props: PlayersProps) {
  const { data: players, isLoading } = useGetPlayersQuery({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { seachString } = useAppSelector((state) => state.playersState);
  let filteredPlayers: PlayerObject[];
  if (seachString) {
    filteredPlayers = filterPlayersByName(players, seachString);
  } else {
    filteredPlayers = players as PlayerObject[];
  }

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
      <PlayerSeach />
      {isLoading ? (
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
            players={filteredPlayers}
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
