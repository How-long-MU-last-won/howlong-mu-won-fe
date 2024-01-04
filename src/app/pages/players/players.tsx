import styles from './players.module.css';

/* eslint-disable-next-line */
export interface PlayersProps {}

export function Players(props: PlayersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Players!</h1>
    </div>
  );
}

export default Players;
