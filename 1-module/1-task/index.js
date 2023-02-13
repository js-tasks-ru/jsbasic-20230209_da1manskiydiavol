function factorial(n) {
  let result = 1;

  if (n === 1 || n === 0) {
    return 1;
  }

  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}
