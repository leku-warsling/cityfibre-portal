import { ComponentStory, ComponentMeta } from "@storybook/react"
import {
  Container,
  Tooltip,
  RangeSliderMarkProps,
  RangeSliderProps,
} from "@chakra-ui/react"
import { FC } from "react"
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from "@chakra-ui/react"

type ExampleRangeSliderProps = RangeSliderProps & {
  markers: RangeSliderMarkProps[]
}

const ExampleRangeSlider: FC<ExampleRangeSliderProps> = ({
  markers = [],
  ...props
}) => (
  <RangeSlider {...props}>
    <RangeSliderTrack bgColor="gray.300">
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <Tooltip
      hasArrow
      bg={`${props.colorScheme}.500`}
      color="white"
      placement="top"
      isOpen={true}
      label={`${props.value?.[0]}%`}
    >
      <RangeSliderThumb
        index={0}
        border="2px solid"
        borderColor={`${props.colorScheme}.500`}
      />
    </Tooltip>
    <Tooltip
      hasArrow
      bg={`${props.colorScheme}.500`}
      color="white"
      placement="top"
      isOpen={true}
      label={`${props.value?.[1]}%`}
    >
      <RangeSliderThumb
        index={1}
        border="2px solid"
        borderColor={`${props.colorScheme}.500`}
      />
    </Tooltip>
    {markers?.map(({ children, ...props }) => (
      <RangeSliderMark {...props}>{children}</RangeSliderMark>
    ))}
  </RangeSlider>
)

export default {
  title: "Components / Forms / Range Slider",
  components: ExampleRangeSlider,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
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
        "telegram",
      ],
      table: {
        defaultValue: "brand",
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: "md",
      },
    },
  },
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </Container>
    ),
  ],
} as ComponentMeta<typeof ExampleRangeSlider>

const Template: ComponentStory<typeof ExampleRangeSlider> = (args) => (
  <ExampleRangeSlider {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  step: 1,
  size: "md",
  value: [25, 75],
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
      ml: "-25px",
      children: "100%",
    },
  ],
}

export const HorizontalSlider = () => (
  <RangeSlider onChangeEnd={console.log}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
)

export const VerticalSlider = () => (
  <RangeSlider orientation="vertical" onChangeEnd={console.log}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
)
