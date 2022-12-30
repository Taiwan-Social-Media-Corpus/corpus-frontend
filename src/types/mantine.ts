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

export type ControllerProps =
  | ({ control: 'text-input' } & TextInputProps)
  | ({ control: 'password-input' } & PasswordInputProps)
  | ({ control: 'select' } & SelectProps)
  | ({ control: 'checkbox-group' } & CheckboxGroupProps)
  | ({ control: 'radio-group' } & RadioGroupProps)
  | ({ control: 'number-input' } & NumberInputProps)
  | ({ control: 'multi-select' } & MultiSelectProps)
  | ({ control: 'switch' } & SwitchProps)
  | ({ control: 'segmented-control' } & SegmentedControlProps);

export type FormControllerProps<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
  controllers: {
    [key in keyof TFieldValues]: ControllerProps & { name: key } & {
      col?: ColProps;
      after?: ReactNode | ((ctx: UseFormReturn<TFieldValues, TContext>) => ReactNode);
    };
  };
};

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export type IconControllerProps =
  | ({ control: 'github' } & IconProps)
  | ({ control: 'facebook' } & IconProps)
  | ({ control: 'no-result' } & IconProps)
  | ({ control: 'lopen' } & IconProps & { renderType: 'footer' | 'header' });
