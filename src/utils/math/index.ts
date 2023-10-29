const rangeNumbers = (a: number, b: number): number[] => {
  if (a > b) return Array.from({ length: a - b + 1 }, (_, i) => b + i);
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

export {
  rangeNumbers,
}