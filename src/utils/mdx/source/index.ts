async function getHeadings(content: string) {
  const headingLines = content.split('\n').filter((line) => line.match(/^###*\s/));

  return headingLines.map((raw) => {
    const depth = raw.slice(0, 3) === '###' ? 3 : 2;
    const value = raw.replace(/^###*\s/, '');
    return { depth, value };
  });
}

export default getHeadings;
