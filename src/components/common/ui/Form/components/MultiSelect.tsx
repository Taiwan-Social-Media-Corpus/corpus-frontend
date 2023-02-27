import { useState } from 'react';
import { MultiSelectProps } from 'types/form';
import { useController } from 'react-hook-form';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import ErrorMessage from './utils/error';

function MultiSelect(props: MultiSelectProps) {
  const { label, name, options, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
    formState: { defaultValues },
  } = useController({ name });
  const [data, setData] = useState(options);

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  const { onChange, ...restField } = field;

  return (
    <MantineMultiSelect
      label={label}
      data={data}
      onChange={(value) => {
        onChange(value ?? defaultValues?.[value]);
      }}
      error={error}
      getCreateLabel={(query) => `+ ${query}`}
      onCreate={(query) => {
        const capitalized = query.charAt(0).toUpperCase() + query.substring(1);
        const item = { label: capitalized, value: query };
        setData((current) => [...current, item]);
        return item;
      }}
      {...rest}
      {...restField}
    />
  );
}

export default MultiSelect;
