function BracketCombinations(num) {
  const allowedSum = num;
  const digitsLength = num * 2;

  function getAllowedBinaryNumbers(allowedSum, digitsLength) {
    const res = [];
    let base = Array(digitsLength).fill("0").join("");
    for (let i = 0; i < Math.pow(2, digitsLength); i++) {
      base = base.padStart(digitsLength, "0");
      if (base[0] === "0") {
        const sum = getSumOrdinal(base);
        if (sum === allowedSum) {
          if (isValid(base)) {
            res.push(base);
          }
        }
      }
      base = binaryAddOne(base);
      // console.log(base)
    }
    return res;
    // console.log(res);
  }

  function binaryAddOne(binaryString) {
    let decNumber = parseInt(binaryString, 2);
    decNumber = decNumber + 1;
    const ret = decNumber.toString(2);
    return ret;
  }

  function getSumOrdinal(binaryString) {
    let sum = 0;
    const arr = binaryString.split("");
    arr.forEach((element) => {
      sum = +element + sum;
    });
    return sum;
  }

  function isValid(binaryString) {
    const obj = { 0: 1, 1: -1 };
    const arr = binaryString.split("");
    let isValid = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + obj[arr[i]];
      if (sum < 0) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  const arr = getAllowedBinaryNumbers(allowedSum, digitsLength);
  num = arr.length;
  console.log(num);
  return num;
}
// code goes here
// return num;

BracketCombinations(4);
// keep this function call here
// console.log(BracketCombinations(readline()));
