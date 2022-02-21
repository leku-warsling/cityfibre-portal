import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@chakra-ui/layout';
import { Step, Steps } from '.';

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

export default {
  title: 'Components / Navigation / Steps',
  component: Steps,
  argTypes: {
    activeStep: {
      control: { type: "select" },
      options: [0, 1, 2, 3],
      table: {
        defaultValue: 0,
      }
    },
    size: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
      ],
      table: {
        defaultValue: "md",
      }
    },
    state: {
      control: { type: "select" },
      options: [
        undefined,
        "error",
        "loading",
      ],
      table: {
        defaultValue: undefined,
      }
    },
    orientation: {
      control: { type: "select" },
      options: [
        "vertical",
        "horizontal",
      ],
      table: {
        defaultValue: "horizontal",
      }
    },
    labelOrientation: {
      control: { type: "select" },
      options: [
        "vertical",
        "horizontal",
      ],
      table: {
        defaultValue: "horizontal",
      }
    },
  },
  decorators: [
    (story: any) => (
      <Container mt="40px">
        {story()}
      </Container>
    ),
  ],
} as ComponentMeta<typeof Steps>;

Steps.displayName = "Steps"
Step.displayName = "Step"

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
