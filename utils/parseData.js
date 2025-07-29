function isNumber(item) {
  return /^-?\d+$/.test(item);
}

function isAlpha(item) {
  return /^[a-zA-Z]+$/.test(item);
}

function alternatingCapsReverse(str) {
  let chars = str.split("").reverse();
  return chars
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join("");
}

module.exports = { isNumber, isAlpha, alternatingCapsReverse };
