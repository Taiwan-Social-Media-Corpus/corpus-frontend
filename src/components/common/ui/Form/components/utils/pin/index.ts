import { PinCode } from 'types/form';

function generateBoxValue(length: number) {
  const values: PinCode['code'] = {};
  for (let i = 0; i < length; i += 1) {
    values[i] = '';
  }
  return values;
}

function combineToString(codeObject: PinCode['code']) {
  const array = Object.values(codeObject);
  return array.join('');
}

// checks whether an array has an empty string
function hasEmptyString(codeObject: PinCode['code']) {
  const valueArray = Object.values(codeObject);
  return valueArray.includes('');
}

// checks whether the codeObject is an empty string
function isAllEmpty(codeObject: PinCode['code']) {
  return Object.values(codeObject).every((value) => value === '');
}

export { generateBoxValue, combineToString, hasEmptyString, isAllEmpty };
