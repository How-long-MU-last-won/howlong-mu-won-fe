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