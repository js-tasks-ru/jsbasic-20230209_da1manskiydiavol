function camelize(str) {
  let flag = false;
  let array = str.split('').map(function(item) {
    if (item === '-') {
      flag = true;
      return '';
    }
    if (flag === true) {
      flag = false;
      return item.toUpperCase();
    }
    else return item;
  });
  return array.join('');
}
