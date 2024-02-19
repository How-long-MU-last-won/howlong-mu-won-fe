import { Container, Spinner, useDisclosure } from '@chakra-ui/react';
import PlayerModal from './player-modal/player-modal';
import PlayerContainerByPosition from './player-container-by-position/player-container-by-position';
import { useAppSelector } from '../../../hooks';

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
    <Container maxW={'100vw'} my={20}>
      {isPlayersLoading ? (
        <Spinner borderWidth={6} speed='0.8s' display={'block'} className='spinner' mx={'auto'} color='bg.red' size={'xl'} />
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
