import type { NextPage } from 'next';
import { Flex, Heading } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Heading>Hello World!</Heading>
    </Flex>
  );
};

export default Home;
