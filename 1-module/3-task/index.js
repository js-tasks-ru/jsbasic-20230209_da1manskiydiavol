function ucFirst(str) {
  if (str.length === 0) return '';
  if (str.length === 1) return str.toUpperCase();
  let modStr = '';
  modStr += str[0].toUpperCase();
  modStr += str.slice(1);
  return modStr;
}
