// import styles from './landing.module.css';

/* eslint-disable-next-line */
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Carousel from './carousel/carousel';
import Trophy from './trophy/trophy';
import { useAppSelector } from '../../../hooks';
import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';

export interface LandingProps {}

export function Landing(props: LandingProps) {
  const { trophies, isTrophiesLoading } = useAppSelector(
    (state) => state.landingState
  );
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <Container
      px={0}
      maxW={{
        base: '100%',
        md: '96vw',
        xxl: '80vw',
      }}
      rounded={16}
      my={12}
    >
      <Box mt={36}>
        <Heading>
          We are Manchester United fan, of course we count our trophies
        </Heading>
        <Heading as="h2" size="md" my={4}>
          But when was the last time we actually won one ...
        </Heading>
      </Box>
      {isTrophiesLoading ? (
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
        <Carousel gap={30}>
          {trophies.map((trophy) => (
            <Flex
              className="shadow"
              key={trophy.id}
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              color="gray.300"
              rounded={16}
              flex={1}
            >
              <Trophy {...trophy} />
            </Flex>
          ))}
        </Carousel>
      )}
    </Container>
  );
}

export default Landing;
