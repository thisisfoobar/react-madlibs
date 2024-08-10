function addCommas(num) {
  let stringNum = num.toString()
  let result = "";
  let count = 0;

  if (stringNum.length <= 3) return stringNum
  for (let i = stringNum.length - 1; i >= 0; i --) {
    result = stringNum[i] + result
    count++;

    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result;
}

module.exports = addCommas;
