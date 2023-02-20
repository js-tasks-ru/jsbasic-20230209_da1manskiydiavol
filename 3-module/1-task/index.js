function namify(users) {
  names = [];
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  return names;
}
