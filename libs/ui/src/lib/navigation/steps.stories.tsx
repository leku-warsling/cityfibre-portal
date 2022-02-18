import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@chakra-ui/layout';
import { Step, Steps } from '.';

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

export default {
  title: 'Components / Navigation / Steps',
  component: Steps,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
      ],
      defaultValue: "md"
    },
    state: {
      control: { type: "select" },
      options: [
        "error",
        "loading",
      ],
    },
    orientation: {
      control: { type: "select" },
      options: [
        "vertical",
        "horizontal",
      ],
      defaultValue: "horizontal"
    },
    labelOrientation: {
      control: { type: "select" },
      options: [
        "vertical",
        "horizontal",
      ],
      defaultValue: "horizontal"
    },
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
  parameters: {
    docs: {
      page: null,
    },
  }
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => (
  <Steps {...args}>
    {steps.map(({ label }, index) => (
      <Step key={label} label={label} />
    ))}
  </Steps>
);

export const Primary = Template.bind({});
Primary.args = {
  activeStep: 0,
  size: "md",
  responsive: false,
  orientation: "horizontal",
  labelOrientation: "horizontal"
};

export const Vertical = () => {
  return (
    <Steps
      orientation="vertical"
      activeStep={0}
    >
      {steps.map(({ label }, index) => (
        <Step key={label} label={label} />
      ))}  
    </Steps>
  );
};
