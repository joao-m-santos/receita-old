export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { dateStyle: 'long' });
