export default function calculateGridHeight(length, height) {
  const rows = Math.ceil(length / 2);

  return rows * height;
}
