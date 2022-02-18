import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container, Tooltip } from "@chakra-ui/react"
import { FC } from "react"
import {
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  SliderProps,
  SliderMarkProps
} from ".."

type ExampleSliderProps = SliderProps & {
  markers?: SliderMarkProps[]
}

const ExampleSlider: FC<ExampleSliderProps> = ({ markers, ...props }) => (
  <Slider {...props}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <Tooltip
      hasArrow
      bg={`${props.colorScheme}.500`}
      color='white'
      placement='top'
      isOpen={true}
      label={`${props.value}%`}
    >
      <SliderThumb border="2px solid" borderColor={`${props.colorScheme}.500`} />
    </Tooltip>
    {markers?.map(({ children, ...props }) => (
      <SliderMark {...props}>
        {children}
      </SliderMark>
    ))}
  </Slider>
)

ExampleSlider.defaultProps = {
  colorScheme: "brand"
}

export default {
  title: "Components / Forms / Slider",
  component: ExampleSlider,
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
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </Container>
    ),
  ],
  parameters: {
    docs: {
      page: null,
    },
  }
} as ComponentMeta<typeof ExampleSlider>

const Template: ComponentStory<typeof ExampleSlider> = (args) => (
  <ExampleSlider {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  step: 1,
  size: "md",
  value: 25,
  min: 0,
  max: 100,
  isDisabled: false,
  isReadOnly: false,
  colorScheme: "brand",
  markers: [
    {
      top: "25px",
      value: 0,
      children: "0%",
    },
    {
      top: "25px",
      value: 100,
      children: "100%",
    }
  ]
}

export function HorizontalSlider() {
  return (
    <Slider colorScheme="red" onChangeEnd={console.log}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderMark value={90} top="20px">
        "90%"
      </SliderMark>
    </Slider>
  )
}

export function VerticalSlider() {
  return (
    <Slider colorScheme="red" isReversed orientation="vertical">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderMark value={90} children="90%" left="40px" />
    </Slider>
  )
}