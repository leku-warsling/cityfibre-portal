import { Container, VStack } from '@chakra-ui/layout';
import { Text, Heading } from '.';

export default {
  title: 'Components / Typography / Text',
  decorators: [
    (story: any) => (
      <Container mt="40px">
        {story()}
      </Container>
    ),
  ],
};

export const sizes = () => (
  <VStack spacing="4">
    <Text fontSize="6xl">
      6xl Text
    </Text>
    <Text fontSize="5xl">
      4xl Text
    </Text>
    <Text fontSize="4xl">
      4xl Text
    </Text>
    <Text fontSize="3xl">
      3xl Text
    </Text>
    <Text fontSize="2xl">
      2xl Text
    </Text>
    <Text fontSize="xl">
      xl Text
    </Text>
    <Text fontSize="lg">
      lg Text
    </Text>
    <Text fontSize="md">
      md Text
    </Text>
    <Text fontSize="sm">
      sm Text
    </Text>
    <Text fontSize="xs">
      xs Text
    </Text>
  </VStack>
);

export const truncation = () => (
  <VStack spacing={4} w="500">
    <Text noOfLines={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
    </Text>
    <Text noOfLines={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
    </Text>
  </VStack>
);

export const variants = () => (
  <VStack spacing={4} w="500" alignItems="flex-start">
    <Heading size="lg">Lead</Heading>
    <Text variant="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
    </Text>
    <Heading size="lg">Body</Heading>
    <Text variant="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
    </Text>
    <Heading size="lg">Condensed</Heading>
    <Text variant="condensed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
    </Text>
  </VStack>
);