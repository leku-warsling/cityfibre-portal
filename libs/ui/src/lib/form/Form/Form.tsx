import { chakra } from '@chakra-ui/react';
import {
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';
import {
  FormProvider,
  FieldValues,
  UseFormProps,
  useForm,
  SubmitHandler,
} from 'react-hook-form';

export interface FormProps<T extends FieldValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  config?: UseFormProps<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactElement | ReactElement[];
}

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
        {...rest}
      >
        {children}
      </chakra.form>
    </FormProvider>
  );
}

export default forwardRef(Form);
