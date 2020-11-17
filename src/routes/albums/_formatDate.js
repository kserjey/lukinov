import PrismicDOM from 'prismic-dom';

const DayAndShortMonth = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
});

function formatDate(dateString) {
  const date = PrismicDOM.Date(dateString);
  return DayAndShortMonth.format(date);
}

export { formatDate };
