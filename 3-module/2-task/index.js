function filterRange(arr, a, b) {
  filteredArray = [];
  for (item of arr) {
    if (item >= a && item <= b) filteredArray.push(item);
  }
  return filteredArray;
}
