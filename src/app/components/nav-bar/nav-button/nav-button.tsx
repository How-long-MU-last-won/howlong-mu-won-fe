import { Link, useLocation } from 'react-router-dom';
// import styles from './nav-button.module.css';
import { Button } from '@chakra-ui/react';
import { hide } from '../../../../redux/slices/navbar/navbar-menu-display.slice';
import { useAppDispatch } from '../../../../hooks';

/* eslint-disable-next-line */
export interface NavButtonProps {
  to: string;
  label: string;
}

export function NavButton(props: NavButtonProps) {
  const { to, label } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  return (
    <Link to={to} style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        variant="solid"
        colorScheme={'white'}
        fontFamily={`'Source Sans Pro', sans-serif;`}
        fontWeight={800}
        aria-label={label}
        my={1}
        mx={1}
        w="100%"
        py={8}
        borderBottom={'3px solid'}
        rounded={0}
        borderColor={ pathname === to ? 'white' : 'bg.red'}
        _hover={{
          borderColor: 'white',
        }}
        onClick={() => dispatch(hide())}
      >
        {label}
      </Button>
    </Link>
  );
}

export default NavButton;
