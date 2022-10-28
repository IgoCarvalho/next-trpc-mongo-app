import { Box, Heading, Stack } from '@chakra-ui/react';

import type { NextPage } from 'next';
import EventCard from '../components/EventCard';

const Home: NextPage = () => {
  return (
    <>
      <Stack
        bg="gray.900"
        maxW="md"
        h="full"
        borderRadius="10"
        overflow="hidden"
      >
        <Box bg="black" p="2">
          <Heading as="h1" size="lg">
            Eventos
          </Heading>
        </Box>

        <Stack p="2" overflowY="auto">
          <EventCard />
          <EventCard />
          <EventCard />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
