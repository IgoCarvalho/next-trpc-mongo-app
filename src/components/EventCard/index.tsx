import { Heading, Stack, Text } from '@chakra-ui/react';

function EventCard() {
  return (
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
        repudiandae, molestiae voluptate doloremque molestias quia!
      </Text>
    </Stack>
  );
}

export default EventCard;
