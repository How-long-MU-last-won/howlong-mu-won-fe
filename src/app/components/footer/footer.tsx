// import styles from './footer.module.css';
import {
  ButtonGroup,
  Link,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ExternalLinkIcon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
      bgColor={'bg.black200'}
      maxW={'100vw'}
    >
      <Stack
        ml={{ base: 2, md: 5, lg: 8, xl: 10 }}
        spacing={{ base: '4', md: '5' }}
        color={'white'}
      >
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup>
            <IconButton
              variant={'solid'}
              isRound={true}
              colorScheme="whiteAlpha"
              size={'lg'}
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              variant={'solid'}
              isRound={true}
              colorScheme="whiteAlpha"
              size={'lg'}
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="lg" color="fg.subtle">
          All images are from the{' '}
          {
            <Link
              href="https://www.manutd.com/"
              isExternal
              color={'base.red'}
              fontSize={'lg'}
            >
              Home Page <ExternalLinkIcon />
            </Link>
          }{' '}
          of the Manchester United Football Club, {' '}
          <Link
            href="https://www.goal.com/"
            isExternal
            color={'base.red'}
            fontSize={'lg'}
          >
            Goal.com <ExternalLinkIcon />
          </Link>, {' '}
          <Link
            href="https://www.mirror.co.uk/"
            isExternal
            color={'base.red'}
            fontSize={'lg'}
          >
            The Mirror <ExternalLinkIcon />
          </Link>, and{' '}
          <Link
            href="https://www.skysports.com/"
            isExternal
            color={'base.red'}
            fontSize={'lg'}
          >
            Sky Sports <ExternalLinkIcon />
          </Link>{' '}.
        </Text>
        <Text fontSize="lg" color="fg.subtle">
          Players and managers' data is collected as of Jan 14 2024.
        </Text>
        <Text fontSize="lg" color="fg.subtle">
          &copy; 2024 Hung Vu. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
