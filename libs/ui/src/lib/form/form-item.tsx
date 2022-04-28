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
import { fromState } from 'fp-ts/lib/StateT';

export type FormItemOwnProps = {
  label?: ReactNode;
  helpText?: ReactNode;
  layout?: 'vertical' | 'horizontal';
  spacing?: number;
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
  spacing = 0,
  children,
}) => {
  const { name } = children.props;
  const formContext = useFormContext();
  const { register, formState } = formContext;
  const isValid = formState.isValid || !formState.touchedFields?.[name];
  const direction = layout === 'vertical' ? 'column' : 'row';
  const showHelpText = !isValid && !helpText;
  const inputElement = cloneElement(children, {
    ...children.props,
    size: children.props.size ?? size,
    ...register(name, {
      required: isRequired,
      disabled: isDisabled,
    }),
    onKeyUp: children.props.onKeyUp
      ? (event: any) => children.props.onKeyUp(event, formContext)
      : undefined,
  });

  return (
    <FormControl
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={!isValid}
    >
      <Stack direction={direction} spacing={spacing}>
        <FormLabel hidden={!label} size={size}>
          {label}
        </FormLabel>
        {inputElement}
      </Stack>
      <FormHelperText hidden={showHelpText}>{helpText}</FormHelperText>
      <FormErrorMessage>{formState.errors?.[name]?.type}</FormErrorMessage>
    </FormControl>
  );
};

FormItem.defaultProps = {
  layout: 'vertical',
};

export default FormItem;
