// import styles from './managers.module.css';
import { Container, Spinner, Heading, Box } from '@chakra-ui/react';
import ManagerCardDesktop from './manager-card-desktop/manager-card-desktop';
import { useAppSelector } from '../../../hooks';

import { useMediaQuery, useTheme } from '@chakra-ui/react';
import ManagerCardMobile from './manager-card-mobile/manager-card-mobile';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ManagersProps {}

export function Managers(props: ManagersProps) {
  const { breakpoints } = useTheme();
  const { managers, isManagersLoading } = useAppSelector(
    (state) => state.managersState
  );
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const [isLargerThanLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  return (
    <Container
      maxW={{
        base: '100%',
        md: '96vw',
        xxl: '80vw',
      }}
      my={12}
    >
      <Box mt={36}>
        <Heading>
          Since Sir Alex Ferguson retired, we had plenty of managers
        </Heading>
        <Heading as="h2" size="md" my={4}>
          Some of them were good, some of them might not be ...
        </Heading>
      </Box>
      {isManagersLoading ? (
        <Spinner
          borderWidth={6}
          speed="0.8s"
          display={'block'}
          className="spinner"
          mx={'auto'}
          color="bg.red"
          size={'xl'}
        />
      ) : (
        managers.map((manager) => {
          if (isLargerThanLg) {
            return <ManagerCardDesktop manager={manager} key={manager.id} />;
          } else {
            return <ManagerCardMobile manager={manager} key={manager.id} />;
          }
        })
      )}
    </Container>
  );
}

export default Managers;
