export default function berlinFormat(time) {
  const [hours, minutes, seconds] = time.split(":").map(d => parseInt(d));
  const firstRow = seconds % 2 === 0 ? "Y" : "O";
  const secondRow = "R".repeat(hours / 5) + "O".repeat(4 - parseInt(hours / 5));
  const thirdRow = "R".repeat(hours % 5) + "O".repeat(4 - (hours % 5));

  return { firstRow, secondRow, thirdRow };
}
