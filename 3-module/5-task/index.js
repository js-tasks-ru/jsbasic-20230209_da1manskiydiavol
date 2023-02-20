function getMinMax(str) {
  let _tmpArr = str.split(' ');
  let _min = 0;
  let _max = 0;

  for (item of _tmpArr) {
    item = Number.parseFloat(item);
    if (_min > item) _min = item;
    if (_max < item) _max = item;
  }

  return {
    min: _min,
    max: _max,
  };
}
