function camelize(str) {
  let _tmpArr = str.split('');
  for (let i = 0; i < _tmpArr.length; i++) {
    if (_tmpArr[i] === '-') _tmpArr.splice(i, 2, _tmpArr[++i].toUpperCase())
  }
  return _tmpArr.join('');
}
