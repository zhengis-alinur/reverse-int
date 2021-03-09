module.exports = function reverse (n) {
  return parseInt((n+"").replace('-','').split("").reverse().join(""));
}
