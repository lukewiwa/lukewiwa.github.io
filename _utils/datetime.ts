export const printDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
