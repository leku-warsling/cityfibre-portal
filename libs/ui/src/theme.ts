import { extendTheme } from "@chakra-ui/react"
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'
import { darken, lighten } from "polished"

const baseColors = {
  brand: "#009F4D"
}

const solidInputVariant = {
  field: {
    borderRadius: "4px",
    bg: "white",
    border: "1px solid",
    borderColor: "#B5B5B5",
    _focus: {
      borderColor: "brand.500"
    },
    _disabled: {
      bg: "#EDEDED",
      opacity: 0.5,
    },
    _readOnly: {
      bg: "gray.100",
    },
    _invalid: {
      borderWidth: "2px",
      borderColor: "red.500"
    }
  }
}

const Button = {
  baseStyle: {
    borderRadius: "4px"
  },
  sizes: {
    xl: {
      py: 5,
      px: 10,
      fontSize: "22px",
    }
  },
  variants: {
    primary : {
      bg: "brand.500",
      color: "#fff",
      _hover: {
        bg: "#027F3E",
      },
      _active: {
        bg: "#005F2E",
      },
      _disabled: {
        bg: "#DBDBDB",
        color: "#7A7A7A"
      }
    },
    secondary : {
      bg: "white",
      color: "#121212",
      border: "1px solid",
      borderColor: "#B5B5B5",
      _hover: {
        bg: "#EDEDED"
      }
    }
  },
  defaultProps: {
    variant: "primary"
  }
}

const Text = {
  variants: {
    lead: {
      fontSize: 19,
      lineHeight: 1.7,
      letterSpacing: "-0.0005rem"
    },
    body: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    condensed: {
      fontSize: 14,
      lineHeight: 1.4,
    }
  }
}

const Input = {
  variants: {
    solid: solidInputVariant,
    outline: {
      field: {
        borderColor: "#B5B5B5"
      }
    }
  },
  defaultProps: {
    variant: "solid"
  }
}

const checkableStyle = {
  control: {
    bg: "#fff",
    border: "1px solid",
    borderColor: "#B5B5B5",
  }
}

const Select = {
  variants: {
    solid: solidInputVariant,
  },
  defaultProps: {
    variant: "solid"
  }
}

const Textarea = {
  variants: {
    solid: solidInputVariant.field,
  },
  defaultProps: {
    variant: "solid"
  }
}

const NumberInput = {
  variants: {
    solid: solidInputVariant,
  },
  defaultProps: {
    variant: "solid"
  }
}

const PinInput = {
  variants: {
    solid: {
      ...solidInputVariant.field,
      _placeholder: {
        color: "gray.600"
      },
    },
  },
  defaultProps: {
    variant: "solid"
  }
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.200"
      }
    },
  },
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif"
  },
  colors: {
    brand: {
      50: lighten(.5, baseColors.brand),
      100: lighten(.4, baseColors.brand),
      200: lighten(.3, baseColors.brand),
      300: lighten(.2, baseColors.brand),
      400: lighten(.1, baseColors.brand),
      500: baseColors.brand,
      600: darken(.1, baseColors.brand),
      700: darken(.2, baseColors.brand),
      800: darken(.3, baseColors.brand),
      900: darken(.4, baseColors.brand),
    },
  },
  components: {
    Button,
    Text,
    Input,
    Checkbox: {
      baseStyle: checkableStyle
    },
    Radio: {
      baseStyle: checkableStyle
    },
    Select,
    Textarea,
    NumberInput,
    PinInput,
    Steps,
  }
})

export default theme