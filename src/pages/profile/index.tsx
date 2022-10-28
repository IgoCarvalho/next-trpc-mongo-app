import {
  Avatar,
  Box,
  Divider,
  Flex,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import EventCard from '../../components/EventCard';

function Profile() {
  return (
    <>
      <Stack maxW="md" h="full">
        <Box bg="black" p="4" borderRadius="10">
          <Flex gap="3">
            <Avatar borderRadius="10" />
            <Text fontSize="xl" fontWeight="bold">
              Igo Carvalho
            </Text>
          </Flex>
          <Flex pt="4" gap="4">
            <Stat>
              <StatLabel fontSize="xs">ID number</StatLabel>
              <StatNumber fontSize="md">14784-A4</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontSize="xs">Insurance</StatLabel>
              <StatNumber fontSize="md">vR123749B</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontSize="xs">Vehicle</StatLabel>
              <StatNumber whiteSpace="nowrap" fontSize="md">
                Volvo FMX
              </StatNumber>
            </Stat>
            <Divider orientation="vertical" h="auto" />
            <Stat>
              <StatLabel fontSize="xs">Driver&apos;s rate</StatLabel>
              <StatNumber fontSize="md">14784-A4</StatNumber>
            </Stat>
          </Flex>
        </Box>

        <Box bg="gray.900" borderRadius="10" overflow="hidden" h="full">
          <Tabs colorScheme="purple">
            <TabList bg="black" px="3">
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  <EventCard />
                  <EventCard />
                </Stack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
