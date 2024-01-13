// import styles from './landing.module.css';

/* eslint-disable-next-line */
import { Container, Flex } from '@chakra-ui/react';
import Carousel from './carousel/carousel';
import { useEffect } from 'react';
import Trophy from './trophy/trophy';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setTrophies } from '../../../redux/slices/landing/landing.slice';

export interface LandingProps {}

export function Landing(props: LandingProps) {
  const dispatch = useAppDispatch();
  const { trophies } = useAppSelector((state) => state.landingState);

  useEffect(() => {
    fetch('http://localhost:8000/trophies/')
      .then((res) => res.json())
      .then((data) => dispatch(setTrophies(data)));
  }, [dispatch]);

  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: '100%',
        sm: '98vw',
        lg: '95vw',
        xxl: '92vw',
      }}
    >
      <Carousel gap={30}>
        {trophies.map((trophy) => (
          <Flex
            key={trophy.id}
            boxShadow={{
              base: 'rgba(0, 0, 0, 0.16) 0px 1px 2px, rgba(0, 0, 0, 0.23) 0px 1px 2px',
              lg: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={8}
            flex={1}
            p={{ base: 2, sm: 2, md: 3, lg: 4, xxl: 5 }}
          >
            <Trophy {...trophy} />
          </Flex>
        ))}
      </Carousel>
    </Container>
  );
}

export default Landing;
