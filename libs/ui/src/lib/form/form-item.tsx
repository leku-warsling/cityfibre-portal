import { cloneElement, FC, ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
  Stack
} from '@chakra-ui/react';

export type FormItemOwnProps = {
  label?: ReactNode;
  helpText?: ReactNode;
  layout?: "vertical" | "horizontal"
  children: ReactElement;
};

export type FormItemProps = Omit<FormControlProps, "isInvalid"> & FormItemOwnProps

const FormItem: FC<FormItemProps> = ({ 
  label, 
  helpText,
  isDisabled,
  isRequired,
  layout, 
  children 
}) => {
  const { name } = children.props
  const { register, formState: { errors, isValid }} = useFormContext();

  return (
    <FormControl isDisabled={isDisabled} isRequired={isRequired} isInvalid={!isValid}>
      <Stack direction={layout === "vertical" ? "column" : "row"}>
        {!!label && <FormLabel>{label}</FormLabel>}
        {cloneElement(children, {
          ...children.props,
          ...register(name, {
            required: isRequired,
            disabled: isDisabled,
          }),
        })}
      </Stack>
      {(isValid && !!helpText) && <FormHelperText>{helpText}</FormHelperText>}
      <FormErrorMessage>{errors?.[name]?.type}</FormErrorMessage>
    </FormControl>
  );
};

FormItem.defaultProps = {
  layout: "vertical"
}

export default FormItem;
