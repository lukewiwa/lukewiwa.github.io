export const printDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
