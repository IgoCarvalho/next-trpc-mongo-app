import { ReactNode } from 'react';
import { Box, Button, Flex, Icon, VStack } from '@chakra-ui/react';
import { HiDocumentText, HiOutlineViewGrid, HiUser } from 'react-icons/hi';
import Link from 'next/link';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <Flex>
      <VStack bg="black" py="3" pt="8">
        <Link href="/">
          <Button p="4" variant="ghost" rounded="none">
            <Icon boxSize="7" as={HiOutlineViewGrid} />
          </Button>
        </Link>
        <Link href="/profile">
          <Button p="4" variant="ghost" rounded="none">
            <Icon boxSize="7" as={HiUser} />
          </Button>
        </Link>
        <Link href="/new">
          <Button p="4" variant="ghost" rounded="none">
            <Icon boxSize="7" as={HiDocumentText} />
          </Button>
        </Link>
      </VStack>
      <Box h="100vh" bg="gray.700" px="8" py="10" w="full">
        {children}
      </Box>
    </Flex>
  );
}

export default Main;
