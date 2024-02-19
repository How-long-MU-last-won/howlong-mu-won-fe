// import styles from './managers.module.css';
import {
  Container,
  Spinner
} from '@chakra-ui/react';
import ManagerCardDesktop from './manager-card-desktop/manager-card-desktop';
import { useAppSelector } from '../../../hooks';

import {
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import ManagerCardMobile from './manager-card-mobile/manager-card-mobile';

/* eslint-disable-next-line */
export interface ManagersProps {}

export function Managers(props: ManagersProps) {
  const { breakpoints } = useTheme();
  const { managers, isManagersLoading } = useAppSelector((state) => state.managersState);

  const [isLargerThanLg] = useMediaQuery(
    `(min-width: ${breakpoints.lg})`
  );

  return (
    <Container maxW={'100vw'} my={20}>
      {
        isManagersLoading ? (
          <Spinner borderWidth={6} speed='0.8s' display={'block'} className='spinner' mx={'auto'} color='bg.red' size={'xl'} />
        ) :
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
