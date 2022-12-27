import { z } from 'zod';
import {
  FormProvider,
  FieldValues,
  UseFormProps,
  SubmitHandler,
  UseFormReturn,
  SubmitErrorHandler,
  useForm as useHookForm,
} from 'react-hook-form';
import { useId } from '@mantine/hooks';
import React, { ReactNode } from 'react';
import { FormControllerProps } from 'types/mantine';
import { zodResolver } from '@hookform/resolvers/zod';
import FormController from '@components/common/ui/Form';
import { Button, Grid, ButtonProps, useMantineTheme } from '@mantine/core';

type AsyncDefaultValues<TFieldValues> = (payload?: unknown) => Promise<TFieldValues>;

type FormProps<TFieldValues extends FieldValues, TContext> = Omit<
  UseFormProps<TFieldValues, TContext>,
  'defaultValues'
> &
  FormControllerProps<TFieldValues, TContext> & {
    defaultValues: TFieldValues | AsyncDefaultValues<TFieldValues>;
    schema?: z.ZodType<TFieldValues>;
    onSubmit: SubmitHandler<TFieldValues>;
    onSubmitError?: SubmitErrorHandler<TFieldValues>;
  };

const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props: FormProps<TFieldValues, TContext>
) => {
  const id = useId();
  const theme = useMantineTheme();
  const { controllers, schema, defaultValues, onSubmit, onSubmitError, ...rest } = props;
  const methods = useHookForm<TFieldValues, TContext>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: defaultValues as UseFormProps<TFieldValues, TContext>['defaultValues'],
    ...rest,
  });

  const Form = ({
    children,
  }: {
    children?: ReactNode | ((ctx: UseFormReturn<TFieldValues, TContext>) => ReactNode);
  }) => (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}>
        <Grid justify="center" gutter="xl">
          {Object.values(controllers).map((field, index) => {
            const { col, after, ...controllerProps } = field;
            return (
              <Grid.Col key={`${field.name}-${index}`} {...col}>
                <FormController {...controllerProps} />
                {typeof after === 'function' ? after(methods) : after}
              </Grid.Col>
            );
          })}
        </Grid>
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );

  Form.Button = (buttonProps: ButtonProps) => (
    <Button
      type="submit"
      form={id}
      loaderProps={{ color: theme.colors.blue[5] }}
      {...buttonProps}
    />
  );

  return [Form, methods] as const;
};

export default useForm;
