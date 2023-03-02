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
import { FormControllerProps, Controllers } from 'types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormController from '@components/common/ui/Form';
import {
  Button,
  Grid,
  ButtonProps,
  useMantineTheme,
  Box,
  BoxProps,
  GridProps,
} from '@mantine/core';

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

  const {
    controllers: rawControllers,
    schema,
    defaultValues,
    onSubmit,
    onSubmitError,
    ...rest
  } = props;

  const methods = useHookForm<TFieldValues, TContext>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: defaultValues as UseFormProps<TFieldValues, TContext>['defaultValues'],
    mode: 'onTouched',
    shouldFocusError: false,
    ...rest,
  });

  /* eslint-disable @typescript-eslint/no-shadow */
  const Form = (
    props: {
      children?: ReactNode | ((ctx: UseFormReturn<TFieldValues, TContext>) => ReactNode);
      grid?: Omit<GridProps, 'children'>;
    } & Omit<BoxProps, 'children'>
  ) => {
    const { children, grid, ...rest } = props;
    let controllers: Controllers<TFieldValues, TContext>;

    if (rawControllers instanceof Function) {
      controllers = rawControllers(methods);
    } else {
      controllers = rawControllers;
    }

    return (
      <FormProvider {...methods}>
        <Box<'form'>
          component="form"
          id={id}
          onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}
          {...rest}
        >
          <Grid justify="center" gutter="lg" {...grid}>
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
        </Box>
      </FormProvider>
    );
  };

  /* eslint-disable @typescript-eslint/no-shadow */
  Form.Button = (props: ButtonProps) => (
    <Button type="submit" form={id} loaderProps={{ color: theme.colors.blue[5] }} {...props} />
  );

  return [Form, methods] as const;
};

export default useForm;
