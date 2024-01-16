export interface DimensionObject {
  width: number,
  height: number,
  top: number,
  left: number,
  x: number,
  y: number,
  right: number,
  bottom: number
}

export interface TrophyObject {
  id: number,
  name: string,
  lastWonDate: string,
  numTimesWon: number,
  lastWonBy: number,
}

export interface ManagerObject {
  id: number,
  trophyWon: string[],
  name: string,
  DOB: string,
  numWins: number,
  numLosses: number,
  numTies: number,
  leadFrom: string,
  leadTo: string,
  moneySpent: number,
  statURL: string,
  shortDesc: string,
  numPlayersUsed: number,
}