import styles from './managers.module.css';

/* eslint-disable-next-line */
export interface ManagersProps {}

export function Managers(props: ManagersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Managers!</h1>
    </div>
  );
}

export default Managers;
