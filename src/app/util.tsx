
export const HOST = 'https://jyoti-cms.kiba.dev';
// export const HOST = 'http://127.0.0.1:1337';

export const getTextColorCss = (index: number): string => {
  const colors = ['sky', 'teal', 'yellow', 'orange'];
  const color = colors[index % colors.length];
  return `text-${color}-200`;
}

export const getLinkTextColorCss = (index: number): string => {
  const colors = ['sky', 'teal', 'yellow', 'orange'];
  const color = colors[index % colors.length];
  return `text-${color}-200 hover:text-${color}-500`;
}
