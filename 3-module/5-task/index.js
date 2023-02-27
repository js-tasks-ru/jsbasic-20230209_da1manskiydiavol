function getMinMax(str) {
  let _arr = str.split(' ').map(function(item) {
    if (Number.parseFloat(item)) return item;
    else return '*';
  });
  let arr = _arr.join('').split('*');

  return {
    min: arr.reduce((a, b) => Math.min(a, b), 0),
    max: arr.reduce((a, b) => Math.max(a, b), 0),
  };
}
