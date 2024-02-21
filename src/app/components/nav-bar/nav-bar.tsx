// import styles from './nav-bar.module.css';
import { Flex, IconButton, Container } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  hide,
  show,
} from '../../../redux/slices/navbar/navbar-menu-display.slice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import NavButton from './nav-button/nav-button';

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
    <Container as={'nav'} bgColor={"bg.red"} maxW={'100vw'} display={'flex'} pos={'fixed'} top={0} zIndex={999}>
      <Flex margin={'auto'}>
        <Flex display={listMenuDisplay}>
          <NavButton to={'/'} label={'Home'} />
          <NavButton to={'/managers'} label={'Managers'} />
          <NavButton to={'/players'} label={'Players'} />
          {/* <NavButton to={'/test'} label={'Trophies'} /> */}
        </Flex>
        <Flex
          w="100vw"
          justifyContent={'flex-end'}
          mt={2}
          display={hamburgerMenuDisplay}
          mb={2}
        >
          <IconButton
            variant='ghost'
            colorScheme='white'
            aria-label="Open Menu"
            size="lg"
            fontSize={'2.5rem'}
            mr={8}
            icon={<HamburgerIcon />}
            onClick={() => dispatch(show())}
          />
        </Flex>
      </Flex>

      <Flex
        w="100vw"
        display={display}
        bgColor={"bg.red"}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end" mt={2} mb={2} className='btn-wrapper'>
          <IconButton
            mt={2}
            mr={8}
            variant='outline'
            colorScheme='white'
            aria-label="Open Menu"
            size="lg"
            fontSize={'1.75rem'}
            icon={<CloseIcon />}
            onClick={() => dispatch(hide())}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NavButton to={'/'} label={'Home'} />
          <NavButton to={'/managers'} label={'Managers'} />
          <NavButton to={'/players'} label={'Players'} />
          {/* <NavButton to={'/test'} label={'Trophies'} /> */}
        </Flex>
      </Flex>
    </Container>
  );
}

export default NavBar;
