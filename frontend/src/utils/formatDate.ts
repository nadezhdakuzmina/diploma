const ONE_DAY = 86_400 * 1000;
const TWO_DAYS = ONE_DAY * 2;
const ONE_YEAR = 365 * ONE_DAY;

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const dateTs = date.getTime();
  const currentTs = Date.now();
  const time = date.toTimeString().slice(0, 5);
  const timePass = currentTs - dateTs;

  if (timePass < ONE_DAY) {
    return `Сегодня, ${time}`;
  }

  if (timePass < TWO_DAYS) {
    return `Вчера, ${time}`;
  }

  const monthIndex = date.getMonth();
  const dateIndex = date.getDate();
  const year = date.getFullYear();

  return [
    dateIndex,
    MONTHS[monthIndex],
    timePass > ONE_YEAR ? year : ''
  ].join(' ') + `, ${time}`;
};
