const solidInputVariant = {
  field: {
    borderRadius: '4px',
    bg: 'white',
    border: '1px solid',
    borderColor: '#B5B5B5',
    _focus: {
      borderColor: 'brand.500',
    },
    _disabled: {
      bg: '#EDEDED',
      opacity: 0.5,
    },
    _readOnly: {
      bg: 'gray.100',
    },
    _invalid: {
      borderWidth: '2px',
      borderColor: 'red.500',
    },
  },
};

const Text = {
  variants: {
    lead: {
      fontSize: 19,
      lineHeight: 1.7,
      letterSpacing: '-0.0005rem',
    },
    body: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    condensed: {
      fontSize: 14,
      lineHeight: 1.4,
    },
  },
};

const Input = {
  variants: {
    solid: solidInputVariant,
    outline: {
      field: {
        borderColor: '#B5B5B5',
        borderRadius: '4px',
      },
    },
    filled: {
      field: {
        borderRadius: '4px',
      },
    },
  },
};

const checkableStyle = {
  control: {
    bg: '#fff',
    border: '1px solid',
    borderColor: '#B5B5B5',
  },
};

const Select = {
  variants: {
    solid: solidInputVariant,
  },
  defaultProps: {
    variant: 'solid',
  },
};

const Textarea = {
  variants: {
    solid: solidInputVariant.field,
  },
};

const NumberInput = {
  variants: {
    solid: solidInputVariant,
  },
  defaultProps: {
    variant: 'solid',
  },
};

const Checkbox = {
  baseStyle: checkableStyle,
};

const Radio = {
  baseStyle: checkableStyle,
};

export { NumberInput, Textarea, Select, Input, Text, Checkbox, Radio };
