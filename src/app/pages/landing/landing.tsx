// import styles from './landing.module.css';

/* eslint-disable-next-line */
import { Container, Flex } from '@chakra-ui/react';
import Carousel from './carousel/carousel';
import Trophy from './trophy/trophy';
import { useAppSelector } from '../../../hooks';
import { Spinner } from '@chakra-ui/react';

export interface LandingProps {}

export function Landing(props: LandingProps) {
  const { trophies, isTrophiesLoading } = useAppSelector(
    (state) => state.landingState
  );

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
      my={20}
    >
      {isTrophiesLoading ? (
        <Spinner borderWidth={6} speed='0.8s' display={'block'} className='spinner' mx={'auto'} color='bg.red' size={'xl'} />
      ) : (
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
      )}
    </Container>
  );
}

export default Landing;
