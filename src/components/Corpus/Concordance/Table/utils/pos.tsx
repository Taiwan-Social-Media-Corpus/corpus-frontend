export function createPosColor(pos: string) {
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
