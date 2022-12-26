import { Text } from '@mantine/core';

function createPosColor(pos: string) {
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

  return posColorFactories[pos[0]] || 'rgb(102, 102, 102)';
}

function renderPos(wordArray: string[], posArray: string[]) {
  return wordArray.map((word, index) => (
    <Text component="span" key={`${word}-${index}`} weight={500} ml="auto" mr="auto">
      {word}
      <sub
        style={{
          marginRight: '0.7rem',
          marginLeft: '0.3rem',
          color: createPosColor(posArray[index]),
        }}
      >
        {posArray[index]}
      </sub>
    </Text>
  ));
}

export default renderPos;
