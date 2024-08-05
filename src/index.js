module.exports = function reverse (n) {
  if (n < 0) {
    let negativeNumber = String(n).slice(1).split("").reverse().join("");
    return Number(negativeNumber);
  } else {
    let reverseArgument = String(n).split("").reverse().join("");
    return Number(reverseArgument);
  }
}
