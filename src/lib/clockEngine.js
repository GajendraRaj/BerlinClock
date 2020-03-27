export default function berlinFormat(time) {
  const [hours, minutes, seconds] = time.split(":").map(d => parseInt(d));
  const firstRow = seconds % 2 === 0 ? "Y" : "O";

  return { firstRow };
}
