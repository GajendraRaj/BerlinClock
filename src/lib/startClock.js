export default function startClock(date) {
  const h = date.getHours();
  const m = formatMinutesOrSeconds(date.getMinutes());
  const s = formatMinutesOrSeconds(date.getSeconds());

  return `${h}:${m}:${s}`;
}

function formatMinutesOrSeconds(minutesOrSeconds) {
  return minutesOrSeconds < 10 ? `0${minutesOrSeconds}` : `${minutesOrSeconds}`;
}
