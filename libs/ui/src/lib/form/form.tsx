import { chakra, StyleProps } from '@chakra-ui/react';
import {
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  FormProvider,
  FieldValues,
  UseFormProps,
  useForm,
  SubmitHandler,
} from 'react-hook-form';

export type FormOwnProps<T extends FieldValues> = {
  config?: UseFormProps<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactElement | ReactElement[];
};

export type FormProps<T extends FieldValues> = FormOwnProps<T> &
  Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> &
  StyleProps;

function Form<T extends FieldValues>(
  props: PropsWithChildren<FormProps<T>>,
  ref: ForwardedRef<HTMLFormElement>
) {
  const { config, onSubmit, children, ...rest } = props;

  const methods = useForm<T>(config);

  return (
    <FormProvider {...methods}>
      <chakra.form
        ref={ref}
        onSubmit={methods.handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="6"
        {...rest}
      >
        {children}
      </chakra.form>
    </FormProvider>
  );
}

export default forwardRef(Form);
