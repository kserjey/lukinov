import PrismicDOM from 'prismic-dom';

const DayLongMonthYear = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const toByType = (acc, item) => ({ ...acc, [item.type]: item.value });

function formatDate(dateString, withYear = false) {
  const date = PrismicDOM.Date(dateString);
  const byType = DayLongMonthYear.formatToParts(date).reduce(toByType, {});
  const monthAndDay = `${byType.month} ${byType.day}`;
  return withYear ? `${byType.year} ${monthAndDay}` : monthAndDay;
}

export { formatDate };
