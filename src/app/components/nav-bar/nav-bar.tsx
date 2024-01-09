// import styles from './nav-bar.module.css';
import { Link } from 'react-router-dom';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  hide,
  show,
} from '../../../redux/slices/navbar/navbar-menu-display.slice';
import { useAppSelector, useAppDispatch } from '../../../hooks';

export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  const display = useAppSelector((state) => state.navbarMenuDisplay.value);
  const dispatch = useAppDispatch();
  const listMenuDisplay = {
    base: 'none',
    sm: 'none',
    md: 'none',
    lg: 'flex',
    xl: 'flex',
    xxl: 'flex',
    xxxl: 'flex',
    xxxxl: 'flex'
  }

  const hamburgerMenuDisplay = {
    base: 'flex',
    sm: 'flex',
    md: 'flex',
    lg: 'none',
    xl: 'none',
    xxl: 'none',
    xxxl: 'none',
    xxxxl: 'none'
  }

  return (
    <Flex>
      <Flex margin={'auto'}>
        <Flex display={listMenuDisplay}>
          <Link to={'/'}>
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>
          <Link to={'/managers'}>
            <Button variant="ghost" aria-label="Managers" my={5} w="100%">
              Managers
            </Button>
          </Link>
          <Link to={'/players'}>
            <Button variant="ghost" aria-label="Players" my={5} w="100%">
              Players
            </Button>
          </Link>
          <Link to={'/trophies'}>
            <Button variant="ghost" aria-label="Trophies" my={5} w="100%">
              Trophies
            </Button>
          </Link>
        </Flex>
        <Flex
          w="100vw"
          justifyContent={'flex-end'}
          mt={2}
          display={hamburgerMenuDisplay}
        >
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => dispatch(show())}
          />
        </Flex>
      </Flex>

      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => dispatch(hide())}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link to={'/'}>
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to={'/managers'}>
            <Button variant="ghost" aria-label="Managers" my={5} w="100%">
              Managers
            </Button>
          </Link>

          <Link to={'/players'}>
            <Button variant="ghost" aria-label="Players" my={5} w="100%">
              Players
            </Button>
          </Link>

          <Link to={'/trophies'}>
            <Button variant="ghost" aria-label="Trophies" my={5} w="100%">
              Trophies
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
