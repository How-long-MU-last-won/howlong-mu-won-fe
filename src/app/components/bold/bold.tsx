// import styles from './bold.module.css';
import { Text } from "@chakra-ui/react";

/* eslint-disable-next-line */
export interface BoldProps {
  children: React.ReactNode;
}

export function Bold(props: BoldProps) {
  const { children } = props;
  return (
    <Text as={"span"} fontWeight={700}>
      {children}
    </Text>
  );
}

export default Bold;
