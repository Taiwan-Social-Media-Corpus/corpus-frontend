import {
  ColProps,
  SwitchProps as MantineSwitchProps,
  SelectProps as MantineSelectProps,
  TextInputProps as MantineTextInputProps,
  RadioGroupProps as MantineRadioGroupProps,
  MultiSelectProps as MantineMultiSelectProps,
  NumberInputProps as MantineNumberInputProps,
  CheckboxGroupProps as MantineCheckboxGroupProps,
  PasswordInputProps as MantinePasswordInputProps,
  SegmentedControlProps as MantineSegmentedControlProps,
} from '@mantine/core';
import { ReactNode } from 'react';
import { AlertContextType } from '@contexts/Alert/types';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export type Option = {
  label: any;
  value: any;
};

export interface Options {
  options: Option[];
}

export type Controlled<T> = { label: string | JSX.Element; name: string } & T;

export type TextInputProps = Controlled<MantineTextInputProps>;
export type NumberInputProps = Controlled<MantineNumberInputProps>;
export type SelectProps = Controlled<
  Omit<MantineSelectProps, 'data'> & {
    options: MantineSelectProps['data'];
  }
>;
export type CheckboxGroupProps = Controlled<Omit<MantineCheckboxGroupProps, 'children'> & Options>;
export type RadioGroupProps = Controlled<Omit<MantineRadioGroupProps, 'children'> & Options>;
export type MultiSelectProps = Controlled<
  Omit<MantineMultiSelectProps, 'data'> & {
    options: MantineMultiSelectProps['data'];
  }
>;
export type SwitchProps = Controlled<MantineSwitchProps>;
export type SegmentedControlProps = Controlled<
  Omit<MantineSegmentedControlProps, 'data'> & {
    options: MantineSegmentedControlProps['data'];
  }
>;
export type PasswordInputProps = Controlled<MantinePasswordInputProps>;
export type PinInputProps = Controlled<{ length: number }> & { otp?: boolean };

export type ControllerProps =
  | ({ control: 'text-input' } & TextInputProps)
  | ({ control: 'password-input' } & PasswordInputProps)
  | ({ control: 'select' } & SelectProps)
  | ({ control: 'checkbox-group' } & CheckboxGroupProps)
  | ({ control: 'radio-group' } & RadioGroupProps)
  | ({ control: 'number-input' } & NumberInputProps)
  | ({ control: 'multi-select' } & MultiSelectProps)
  | ({ control: 'switch' } & SwitchProps)
  | ({ control: 'segmented-control' } & SegmentedControlProps)
  | ({ control: 'pin-input' } & PinInputProps);

export type Controllers<TFieldValues extends FieldValues, TContext> = {
  [key in keyof TFieldValues]: ControllerProps & { name: key } & {
    col?: ColProps;
    after?: ReactNode | ((ctx: UseFormReturn<TFieldValues, TContext>) => ReactNode);
  };
};

export type FormControllerProps<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
  controllers:
    | Controllers<TFieldValues, TContext>
    | ((context: UseFormReturn<TFieldValues, TContext>) => Controllers<TFieldValues, TContext>);
};

export type PinCode = { code: { [key: number]: string } };

export type PinHelperProps = {
  helper:
    | JSX.Element
    | ((
        alert: AlertContextType['alert'],
        dispatchAlert: AlertContextType['dispatch']
      ) => JSX.Element);
};

export type PinContainerProps<T extends FieldValues = PinCode> = {
  helper:
    | JSX.Element
    | ((
        alert: AlertContextType['alert'],
        dispatchAlert: AlertContextType['dispatch']
      ) => JSX.Element);
  onSubmit: (
    context: UseFormReturn<T>,
    alert: AlertContextType['alert'],
    dispatchAlert: AlertContextType['dispatch']
  ) => any | Promise<any>;
};
