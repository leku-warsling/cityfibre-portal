import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container, Stack, VStack } from '@chakra-ui/layout';
import { get } from 'lodash-es';
import * as React from 'react';
import { Checkbox, CheckboxGroup } from '..';

export default {
  title: 'Components / Forms / Checkbox',
  component: Checkbox,
  argTypes: {
    colorScheme: { 
      control: { type: "select"},
      options: [
        "brand",
        "green",
        "blue",
        "red",
        "gray",
        "orange",
        "teal",
        "teal",
        "whiteAlpha",
        "blackAlpha",
        "yellow",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram"
      ],
      defaultValue: "solid"
    },
    size: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
      ],
      defaultValue: "md"
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isIndeterminate: false,
  isChecked: false,
  isInvalid: false,
  isDisabled: false,
  colorScheme: "brand",
  size: "md",
  children: "Checkbox"
}

export const states = () => (
  <VStack alignItems="flex-start" spacing={6}>
    <Checkbox colorScheme="brand">Idle</Checkbox>
    <Checkbox colorScheme="brand" isChecked>
      Checked
    </Checkbox>
    <Checkbox colorScheme="brand" isIndeterminate>
      Indeterminate
    </Checkbox>
    <Checkbox isDisabled>Disabled</Checkbox>
    <Checkbox isReadOnly>Readonly</Checkbox>
    <Checkbox isInvalid>Invalid</Checkbox>
  </VStack>
);

export const colorSchemes = () => {
  return (
    <VStack alignItems="flex-start" spacing={6}>
      <Checkbox colorScheme="brand" isChecked>
        Brand
      </Checkbox>
      <Checkbox colorScheme="blue" isChecked>
        Blue
      </Checkbox>
      <Checkbox colorScheme="red" isChecked>
        Red
      </Checkbox>
      <Checkbox colorScheme="orange" isChecked>
        Orange
      </Checkbox>
      <Checkbox colorScheme="teal" isChecked>
        Teal
      </Checkbox>
    </VStack>
  );
};

export const Sizes = () => {
  const sizes = ['sm', 'md', 'lg'];
  const sizeNames = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
  };

  return (
    <Stack direction="row" spacing={6}>
      {sizes.map((size) => (
        <Checkbox key={size} size={size}>
          {get(sizeNames, size)}
        </Checkbox>
      ))}
    </Stack>
  );
};

export const Indeterminate = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack ml="6" mt="2" align="start">
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
};

export const CheckboxGroupExample = () => {
  return (
    <CheckboxGroup defaultValue={['one', 'two']} onChange={console.log}>
      <Stack align="start" direction={['column', 'row']} spacing={[2, 4, 6]}>
        <Checkbox value="one">One</Checkbox>
        <Checkbox value="two">Two</Checkbox>
        <Checkbox value="three">Three</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};
