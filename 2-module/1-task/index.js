function sumSalary(salaries) {
  let sum = 0;
  for (item in salaries) {
    if (Number.isInteger(salaries[item])) sum += salaries[item];
  }
  return sum;
}
