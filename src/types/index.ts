export interface DimensionObject {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}

export interface TrophyObject {
  id: number;
  name: string;
  lastWonDate: string;
  numTimesWon: number;
  lastWonBy: number;
}

export interface ManagerObject {
  id: number;
  trophyWon: string[];
  name: string;
  DOB: string;
  numWins: number;
  numLosses: number;
  numTies: number;
  leadFrom: string;
  leadTo: string;
  moneySpent: string;
  statURL: string;
  shortDesc: string;
  numPlayersUsed: number;
}

export interface PlayerObject {
  id: number;
  boughtBy: string;
  workWith: string[];
  position: 'DF' | 'MF' | 'FW' | 'GK';
  name: string;
  numGamesPlayed: number;
  playFrom: string;
  playTo: string;
  statURL: string;
  price: string;
}

export interface DisplayPlayerSectionObject {
  'GK': boolean;
  'DF': boolean;
  'MF': boolean;
  'FW': boolean;
  [key: string]: boolean;
}
