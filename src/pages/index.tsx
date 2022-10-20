import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
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
  VStack,
} from '@chakra-ui/react';

import { HiDocumentText, HiOutlineViewGrid, HiUser } from 'react-icons/hi';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex>
      <VStack bg="black" py="3" pt="8">
        <Button p="4" variant="ghost" rounded="none">
          <Icon boxSize="7" as={HiOutlineViewGrid} />
        </Button>
        <Button p="4" variant="ghost" rounded="none">
          <Icon boxSize="7" as={HiUser} />
        </Button>
        <Button p="4" variant="ghost" rounded="none">
          <Icon boxSize="7" as={HiDocumentText} />
        </Button>
      </VStack>
      <Box h="100vh" bg="gray.700" px="8" py="10" w="full">
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
                    <Stack
                      bg="gray.700"
                      p="2"
                      borderRadius="5"
                      border="2px"
                      borderColor="transparent"
                      cursor="pointer"
                      _hover={{
                        borderColor: 'purple.600',
                        boxShadow: 'lg',
                      }}
                    >
                      <Heading size="md">Role aleatorio</Heading>
                      <Text noOfLines={2}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae repudiandae, molestiae voluptate doloremque
                        molestias quia!
                      </Text>
                    </Stack>
                    <Stack
                      bg="gray.700"
                      p="2"
                      borderRadius="5"
                      border="2px"
                      borderColor="transparent"
                      cursor="pointer"
                      _hover={{
                        borderColor: 'purple.600',
                        boxShadow: 'lg',
                      }}
                    >
                      <Heading size="md">Role aleatorio</Heading>
                      <Text noOfLines={2}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae repudiandae, molestiae voluptate doloremque
                        molestias quia!
                      </Text>
                    </Stack>
                    <Stack
                      bg="gray.700"
                      p="2"
                      borderRadius="5"
                      border="2px"
                      borderColor="transparent"
                      cursor="pointer"
                      _hover={{
                        borderColor: 'purple.600',
                        boxShadow: 'lg',
                      }}
                    >
                      <Heading size="md">Role aleatorio</Heading>
                      <Text noOfLines={2}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae repudiandae, molestiae voluptate doloremque
                        molestias quia!
                      </Text>
                    </Stack>
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
      </Box>
    </Flex>
  );
};

export default Home;
