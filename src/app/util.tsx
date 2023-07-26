
export const getTextColorCss = (index: number): string => {
  const colors = ['sky', 'teal', 'yellow', 'orange'];
  const color = colors[index % colors.length];
  return `text-${color}-200`;
}
