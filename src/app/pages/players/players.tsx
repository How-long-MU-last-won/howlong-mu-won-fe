import { Container, SimpleGrid } from '@chakra-ui/react';
// import styles from './players.module.css';
import { useState } from 'react';
import PlayerCard from './player-card/player-card';

/* eslint-disable-next-line */
export interface PlayersProps {}

export function Players(props: PlayersProps) {
  const [players, setPlayers] = useState([
    {
      id: 24,
      boughtBy: 'Erik ten Hag',
      workWith: ['Erik ten Hag'],
      position: 'DF',
      name: 'Jonny Evans',
      numGamesPlayed: 16,
      playFrom: '2023-07-18',
      playTo: '2024-01-14',
      statURL: 'https://www.transfermarkt.us/jonny-evans/profil/spieler/42412',
      price: 'Free',
    },
    {
      id: 25,
      boughtBy: 'Louis van Gaal',
      workWith: ['Ole Gunner Solskjaer', 'Louis van Gaal', 'Jose Mourinho'],
      position: 'DF',
      name: 'Matteo Darmian',
      numGamesPlayed: 92,
      playFrom: '2015-07-11',
      playTo: '2019-09-02',
      statURL:
        'https://www.transfermarkt.us/matteo-darmian/profil/spieler/54906',
      price: '€18.00m',
    },
    {
      id: 26,
      boughtBy: 'Louis van Gaal',
      workWith: ['Ole Gunner Solskjaer', 'Louis van Gaal', 'Jose Mourinho'],
      position: 'DF',
      name: 'Eric Bailly',
      numGamesPlayed: 113,
      playFrom: '2016-07-01',
      playTo: '2023-09-04',
      statURL: 'https://www.transfermarkt.us/eric-bailly/profil/spieler/286384',
      price: '€38.00m',
    },
    {
      id: 30,
      boughtBy: 'Jose Mourinho',
      workWith: ['Ole Gunner Solskjaer', 'Jose Mourinho', 'Ralf Rangnick'],
      position: 'MF',
      name: 'Nemanja Matic',
      numGamesPlayed: 189,
      playFrom: '2017-07-31',
      playTo: '2022-07-01',
      statURL:
        'https://www.transfermarkt.us/nemanja-matic/profil/spieler/74683',
      price: '€44.70m',
    },
    {
      id: 31,
      boughtBy: 'Ole Gunner Solskjaer',
      workWith: ['Erik ten Hag'],
      position: 'MF',
      name: 'Facundo Pellistri',
      numGamesPlayed: 24,
      playFrom: '2020-10-05',
      playTo: '2024-01-14',
      statURL:
        'https://www.transfermarkt.us/facundo-pellistri/profil/spieler/676318',
      price: '€8.50m',
    },
    {
      id: 32,
      boughtBy: 'Erik ten Hag',
      workWith: ['Erik ten Hag'],
      position: 'FW',
      name: 'Antony',
      numGamesPlayed: 65,
      playFrom: '2022-08-30',
      playTo: '2024-01-14',
      statURL: 'https://www.transfermarkt.us/antony/profil/spieler/602105',
      price: '€95.00m',
    },
    {
      id: 19,
      boughtBy: 'Louis van Gaal',
      workWith: ['Louis van Gaal'],
      position: 'GK',
      name: 'Victor Valdes',
      numGamesPlayed: 2,
      playFrom: '2015-01-08',
      playTo: '2016-07-07',
      statURL: 'https://www.transfermarkt.us/victor-valdes/profil/spieler/7589',
      price: 'free',
    },
    {
      id: 20,
      boughtBy: 'Ole Gunner Solskjaer',
      workWith: ['Ole Gunner Solskjaer'],
      position: 'GK',
      name: 'Tom Heaton',
      numGamesPlayed: 3,
      playFrom: '2021-07-02',
      playTo: '2024-01-14',
      statURL: 'https://www.transfermarkt.us/tom-heaton/profil/spieler/34130',
      price: 'free',
    },
  ]);

  return (
    <Container maxW={'100vw'} my={20}>
      <SimpleGrid
        minChildWidth={{ md: '30vw', lg: '24vw', xl: '20vw', xxl: '18vw' }}
        mx={{ base: '10vw', md: '6vw', xxl: '8vw' }}
        spacing={{ base: '4vw', md: '2vw', lg: '1.5vw'}}
      >
        {players.map((player) => {
          return <PlayerCard name={player.name} id={player.id} key={player.id} />;
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Players;
