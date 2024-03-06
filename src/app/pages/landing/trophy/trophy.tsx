// import styles from './trophy.module.css';
import { useAppSelector } from '@hooks';
import { Box, Heading, Image, useMediaQuery, useTheme } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface TrophyProps {
  name: string;
  id: number;
  lastWonDate: string;
}

const countDaysSinceLastWon = (lastWonDate: string) => {
  const lastWon = new Date(new Date(lastWonDate).setHours(0, 0, 0, 0));
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const diffTime = Math.abs(
    today.getTime() - (lastWon.getTime() + lastWon.getTimezoneOffset() * 60000)
  );
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export function Trophy(props: TrophyProps) {
  const { name, id, lastWonDate } = props;
  const days = countDaysSinceLastWon(lastWonDate);
  const { breakpoints } = useTheme();
  const largeImg = `./images/trophies/cup_${id}.jpg`;
  const thumbImg = `./images/trophies/cup_${id}_thumb.jpg`;

  const [isGreaterThanLG] = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const display = useAppSelector((state) => state.navbarMenuDisplay.value);
  return (
    <Box pos="relative">
      <Image src={isGreaterThanLG ? largeImg : thumbImg} rounded={8} boxSize="full" />
      <Heading
        as={'h1'}
        pos="absolute"
        bottom={{
          base: 0.75,
          sm: 1,
          md: 1.25,
          lg: 1.75,
          xl: 2,
          xxl: 2.5,
        }}
        zIndex={999}
        width={'100%'}
        fontSize={{
          base: '1.125rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '3.5rem',
          xxl: '4.5rem',
          xxxl: '5rem',
        }}
        left={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 6,
          xl: 8,
          xxl: 10,
          xxxl: 12,
        }}
        lineHeight={{
          base: 1.2,
          lg: 1.25,
          xxl: 1.5,
        }}
        display={display === 'flex' ? 'none' : 'block'}
      >
        {days} Days since MU last won {name}
      </Heading>
      <Box
        pos="absolute"
        bottom={0}
        h={'50%'}
        w={'100%'}
        bgGradient={'linear(185deg, rgba(0,0,0,0) 20%, rgba(0,0,0,.8) 90%)'}
      ></Box>
    </Box>
  );
}

export default Trophy;
