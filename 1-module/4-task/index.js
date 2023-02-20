function checkSpam(str) {
  let _str = str.toLowerCase();
  if (_str.includes("xxx") || _str.includes("1xbet")) return true;
  return false;
}
