const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

export { formatDate };
