function checkSpam(str) {
  let _str = str.toLowerCase();
  if (_str.indexOf("xxx") !== -1 || _str.indexOf("1xbet") !== -1) return true;
  return false;
}
