// import styles from './managers.module.css';
import {
  Container
} from '@chakra-ui/react';
import { useEffect } from 'react';
import ManagerCardDesktop from './manager-card-desktop/manager-card-desktop';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setManagers } from '../../../redux/slices/managers/managers.slice';

import {
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import ManagerCardMobile from './manager-card-mobile/manager-card-mobile';

/* eslint-disable-next-line */
export interface ManagersProps {}

export function Managers(props: ManagersProps) {
  const { breakpoints } = useTheme();
  const dispatch = useAppDispatch();
  const { managers } = useAppSelector((state) => state.managersState);

  const [isLargerThanLg] = useMediaQuery(
    `(min-width: ${breakpoints.lg})`
  );

  useEffect(() => {
    fetch('http://localhost:8000/coaches/')
      .then((res) => res.json())
      .then((data) => dispatch(setManagers(data)));
  }, [dispatch]);

  return (
    <Container maxW={'100vw'}>
      {
        managers.map((manager) => {
          if (isLargerThanLg) {
            return <ManagerCardDesktop manager={manager} key={manager.id} />
          } else {
            return <ManagerCardMobile manager={manager} key={manager.id} />
          }
        })
      }
    </Container>
  );
}

export default Managers;
