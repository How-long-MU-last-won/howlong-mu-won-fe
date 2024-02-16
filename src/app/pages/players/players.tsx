import { Container, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import PlayerModal from './player-modal/player-modal';
import { setPlayers } from '../../../redux/slices/players/players.slice';
import { useAppDispatch } from '../../../hooks';
import PlayerContainerByPosition from './player-container-by-position/player-container-by-position';

/* eslint-disable-next-line */
export interface PlayersProps {}

const API_URL = import.meta.env.VITE_API_URL;
const POSITIONS = [
  { positionName: 'GOALKEEPERS', position: 'GK' },
  { positionName: 'DEFENDERS', position: 'DF' },
  { positionName: 'MIDFIELDERS', position: 'MF' },
  { positionName: 'FORWARDS', position: 'FW' },
];

export function Players(props: PlayersProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(API_URL + 'players/')
      .then((res) => res.json())
      .then((data) => dispatch(setPlayers(data)));
  }, [dispatch]);

  return (
    <Container maxW={'100vw'} my={20}>
      {POSITIONS.map((position) => (
        <PlayerContainerByPosition
          key={position.position}
          positionName={position.positionName}
          position={position.position}
          onOpen={onOpen}
        />
      ))}

      <PlayerModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

export default Players;
