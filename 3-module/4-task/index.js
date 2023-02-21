function showSalary(users, age) {
  let str = '';
  let count = 0;
  for (user of users) {
    if (user.age <= age) {
      count++;
      if (count > 1) str += '\n';
      str += `${user.name}, ${user.balance}`;
    }
  }
  return str;
}
