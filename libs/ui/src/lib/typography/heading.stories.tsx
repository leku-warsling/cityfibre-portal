import { Container, VStack } from '@chakra-ui/layout';
import { Heading } from '.';

export default {
  title: 'Components / Typography / Heading',
  decorators: [
    (story: any) => (
      <Container mt="40px">
        {story()}
      </Container>
    ),
  ],
};

export const sizes = () => (
  <VStack spacing="6">
    <Heading as="h1" size="4xl">
      4xl Heading
    </Heading>
    <Heading as="h2" size="3xl">
      3xl Heading
    </Heading>
    <Heading as="h2" size="2xl">
      2xl Heading
    </Heading>
    <Heading as="h2" size="xl">
      xl Heading
    </Heading>
    <Heading as="h3" size="lg">
      lg Heading
    </Heading>
    <Heading as="h4" size="md">
      md Heading
    </Heading>
    <Heading as="h5" size="sm">
      sm Heading
    </Heading>
    <Heading as="h6" size="xs">
      xs Heading
    </Heading>
  </VStack>
);

export const truncation = () => (
  <Heading as="h1" isTruncated>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas nisi. Cras vestibulum posuere semper. Vivamus in imperdiet orci. Nullam dolor ligula, cursus a lectus at, accumsan posuere purus. Morbi sit amet viverra metus. Nam suscipit erat pretium nunc tincidunt gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis purus a tincidunt viverra. Maecenas at nunc at orci fringilla interdum vel nec ante. Suspendisse a convallis dolor, vitae semper nisl
  </Heading>
);
