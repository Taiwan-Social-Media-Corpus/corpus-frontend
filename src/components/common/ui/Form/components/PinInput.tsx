import {
  FormEvent,
  createRef,
  useEffect,
  RefObject,
  KeyboardEvent,
  ClipboardEventHandler,
} from 'react';
import { PinInputProps } from 'types/form';
import { useMediaQuery } from '@mantine/hooks';
import { SimpleGrid, TextInput } from '@mantine/core';
import { useController, useFormContext } from 'react-hook-form';
import { isAllEmpty } from './utils/pin';

const AutoFocus = ({ refs, name }: { refs: RefObject<HTMLInputElement>[]; name: string }) => {
  const { getValues } = useFormContext();
  const values = getValues(name);

  useEffect(() => {
    if (isAllEmpty(values)) {
      refs[0].current?.focus();
    }
  }, [values]);

  return null;
};

function PinInput(props: PinInputProps) {
  const { name, length, otp } = props;
  const autoComplete = otp ? 'one-time-code' : 'off';
  const refs = Array.from(Array(length), () => createRef<HTMLInputElement>());
  const {
    field: { onChange, value, onBlur },
  } = useController({ name });
  const smallScreen = useMediaQuery('(max-width: 320px)');
  const textSize = smallScreen ? 'xs' : 'md';

  const handleOnInput = (refIndex: number) => (event: FormEvent<HTMLInputElement>) => {
    let { value: digit } = event.currentTarget;
    const isNumber = /[0-9]/.test(digit);

    if (isNumber) {
      refs[refIndex + 1]?.current?.focus();
    }

    if (!isNumber || digit.length > 1) {
      digit = '';
    }

    onChange({ ...value, [refIndex]: digit });
  };

  const handleOnKeyDown = (refIndex: number) => (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && event.currentTarget.value === '') {
      refs[refIndex - 1]?.current?.focus();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      refs[refIndex - 1]?.current?.focus();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      refs[refIndex + 1]?.current?.focus();
    }
  };

  const handleOnPaste: ClipboardEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const currentValue = event.clipboardData.getData('Text').trim();
    const numbers = /^[0-9]+$/;
    if (!numbers.test(currentValue)) return null;
    const input = Array.from(currentValue).slice(0, length);
    event.stopPropagation();
    onChange({ ...input });
    refs[input.length]?.current?.focus();
    return null;
  };

  return (
    <SimpleGrid
      cols={length}
      breakpoints={[
        { minWidth: 530, cols: length, spacing: 15 },
        { minWidth: 425, cols: length, spacing: 10 },
        { minWidth: 320, cols: length, spacing: 3 },
      ]}
    >
      {Object.keys(refs).map((index) => {
        const refIndex = parseInt(index, 10);
        return (
          <TextInput
            ref={refs[refIndex]}
            key={index}
            onInput={handleOnInput(refIndex)}
            onKeyDown={handleOnKeyDown(refIndex)}
            value={value[refIndex]}
            onBlur={onBlur}
            onFocus={(event) => event.currentTarget.select()}
            onPaste={handleOnPaste}
            autoComplete={autoComplete}
            size={textSize}
            styles={() => ({
              input: {
                textAlign: 'center',
              },
            })}
          />
        );
      })}
      <AutoFocus refs={refs} name={name} />
    </SimpleGrid>
  );
}

export default PinInput;
