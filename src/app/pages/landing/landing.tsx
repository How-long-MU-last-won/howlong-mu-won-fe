import styles from './landing.module.css';

/* eslint-disable-next-line */
import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
} from '@chakra-ui/react';
import Carousel from './carousel/carousel';
import { useEffect, useState } from 'react';

export interface LandingProps {}

export function Landing(props: LandingProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: '95%',
        sm: '35rem',
        md: '43.75rem',
        lg: '58.75rem',
        xl: '75rem',
        xxl: '92.5rem',
        xxxl: '107.5rem',
        xxxxl: '120rem',
      }}
    >
      <Carousel gap={32}>
        {data.slice(5, 15).map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <VStack mb={6}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                textAlign="left"
                w="full"
                mb={2}
              >
                {post.title}
              </Heading>
              <Text w="full">{post.body}</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}>
                <Tag size="sm" variant="outline" colorScheme="green">
                  User: {post.userId}
                </Tag>
                <Tag size="sm" variant="outline" colorScheme="cyan">
                  Post: {post.id - 5}
                </Tag>
              </HStack>
              <Button
                onClick={() => alert(`Post ${post.id - 5} clicked`)}
                colorScheme="green"
                fontWeight="bold"
                color="gray.900"
                size="sm"
              >
                More
              </Button>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Container>
  );
}

export default Landing;
