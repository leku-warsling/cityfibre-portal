import { cloneElement, FC, ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
  Stack,
} from '@chakra-ui/react';

export type FormItemOwnProps = {
  label?: ReactNode;
  helpText?: ReactNode;
  layout?: 'vertical' | 'horizontal';
  children: ReactElement;
};

export type FormItemProps = Omit<FormControlProps, 'isInvalid'> &
  FormItemOwnProps;

const FormItem: FC<FormItemProps> = ({
  label,
  size,
  helpText,
  isDisabled,
  isRequired,
  layout,
  children,
}) => {
  const { name } = children.props;
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();
  const direction = layout === 'vertical' ? 'column' : 'row';
  const showHelpText = !isValid && !helpText;
  const inputElement = cloneElement(children, {
    ...children.props,
    size: children.props.size ?? size, 
    ...register(name, {
      required: isRequired,
      disabled: isDisabled,
    }),
  });

  return (
    <FormControl
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={!isValid}
    >
      <Stack direction={direction}>
        <FormLabel hidden={!label} size={size}>
          {label}
        </FormLabel>
        {inputElement}
      </Stack>
      <FormHelperText hidden={showHelpText}>{helpText}</FormHelperText>
      <FormErrorMessage>{errors?.[name]?.type}</FormErrorMessage>
    </FormControl>
  );
};

FormItem.defaultProps = {
  layout: 'vertical',
};

export default FormItem;
