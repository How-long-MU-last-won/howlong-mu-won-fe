import styles from './trophies.module.css';

/* eslint-disable-next-line */
export interface TrophiesProps {}

export function Trophies(props: TrophiesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Trophies!</h1>
    </div>
  );
}

export default Trophies;
