function isEmpty(obj) {
  let count = 0;
  for (item in obj) {
    if (item) return false;
  }
  return true;
}
