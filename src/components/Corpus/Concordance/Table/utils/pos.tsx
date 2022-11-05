import { Text } from '@mantine/core';

function createPosColor(pos: string) {
  if (pos.length > 4) return 'rgb(102, 102, 102)';

  const posColorFactories: { [key in string]: any } = {
    A: 'rgb(21, 170, 191)',
    C: 'rgb(231, 41, 138)',
    D: 'rgb(117, 112, 179)',
    I: 'rgb(102, 166, 30)',
    N: 'rgb(27, 158, 119)',
    P: 'rgb(102, 166, 30)',
    S: 'rgb(166, 118, 29)',
    T: 'rgb(102, 166, 30)',
    V: 'rgb(217, 95, 2)',
    F: 'rgb(230, 171, 2)',
  };

  return posColorFactories[pos[0]];
}

const zip = (...rows: any[]): string[][] => [...rows[0]].map((_, c) => rows.map((row) => row[c]));

function createPos(wordArray: string[], posArray: string[]) {
  return zip(wordArray, posArray).map((value, index) => (
    <Text component="span" key={`${value}-${index}`} weight={500} ml="auto" mr="auto">
      {value[0]}
      <sub style={{ marginRight: '0.7rem', marginLeft: '0.3rem', color: createPosColor(value[1]) }}>
        {value[1]}
      </sub>
    </Text>
  ));
}

export default createPos;
