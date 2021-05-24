function FarthestNodes(strArr) {
  function getMergedPath(pathA, pathB) {
    const pathAArr = pathA.split("-");
    const pathAFrom = pathAArr[0];
    const pathATo = pathAArr[pathAArr.length - 1];

    const pathBArr = pathB.split("-");
    const pathBFrom = pathBArr[0];
    const pathBTo = pathBArr[pathBArr.length - 1];

    let mergedPath = pathA;
    if (pathATo === pathBFrom) {
      pathAArr.pop();
      pathBArr.shift();
      if (!pathAArr.includes(pathBTo)) {
        arr = pathAArr.concat(pathATo, pathBArr);
        mergedPath = arr.join("-");
      }
    }
    return mergedPath;
  }

  function getRevPaths(strArr1) {
    const out = [];
    for (let it of strArr1) {
      out.push([...it].reverse().join(""));
    }
    return out;
  }

  function getPathLength(path) {
    const len = path.split("-").length;
    return len;
  }

  function getFinalPathArray() {
    const revPaths = getRevPaths(strArr);
    const allPaths = strArr.concat(revPaths);
    const outPaths = [];

    strArr.forEach((path) => {
      let interPath = path;
      for (let it of allPaths) {
        interPath = getMergedPath(interPath, it);
      }
      outPaths.push(interPath);
    });
    return outPaths;
  }

  function getPathLengthArray(arr) {
    const lengthArr = [];
    arr.forEach((x) => {
      const pathLength = getPathLength(x)
      lengthArr.push(pathLength);
    });
    return lengthArr;
  }

  const finalPathArray = getFinalPathArray();
  const lengthArray = getPathLengthArray(finalPathArray);
  const longestPath = Math.max(...lengthArray);
  return longestPath;
}

const ret1 = FarthestNodes(["b-e", "b-c", "c-d", "a-b", "e-f"]);
console.log(ret1);

function StockPicker(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let j = i;
    for (let j = i; j < arr.length; j++) {
      const tempProfit = arr[j] - arr[i];
      if (tempProfit > 0) {
        if (tempProfit > maxProfit) {
          maxProfit = tempProfit;
        }
      }
    }
  }
  return maxProfit;
}

// const ret1 = StockPicker([10,12,4,5,9]);
// console.log(ret1);

function NumberEncoding(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const r = /[a-z]/;
  function getIndex(a) {
    const ind = alphabets.indexOf(a) + 1;
    return ind;
  }

  function process(str1) {
    let outArr = [];
    for (let s of str1) {
      const s1 = s.toLowerCase();
      let temp = s;
      if (r.test(s1)) {
        temp = getIndex(s1);
      }
      outArr.push(temp);
    }
    return outArr.join("");
  }

  const ret = process(str);
  return ret;
}
// const ret1 = NumberEncoding('af5c a#!')
// console.log(ret1)

function stringArith(str1) {
  const obj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? -1 : a / b),
  };

  function process(str) {
    const arr = str.split(" ");
    const ret = obj[arr[1]](+arr[0], +arr[2]);
    return ret;
  }

  return process(str1);
}

// const ret1 = stringArith("12 / 0");
// console.log(ret1)

function groceryPrices(arr1) {
  let r = /\d+\.\d+/g;
  function convertToFloat(str) {
    const res = str.match(r);
    const float = parseFloat(res[0]);
    return float;
  }

  function tokenize(arr) {
    const arr1 = arr.map((item) => {
      const fl = convertToFloat(item);
      return fl;
    });
    return arr1;
  }

  const r1 = tokenize(arr1);
  return r1;
}

// const ret1 = groceryPrices([
//   "ice cream ($5.99)",
//   "banana ($0.20)",
//   "sandwich ($8.50)",
//   "soup ($1.99)",
// ]);
// console.log(ret1);

// East or West
function eastOrWest(arr1) {
  const obj = {
    e: "w",
    a: "e",
    s: "s",
    t: "t",
    E: "W",
    A: "E",
    S: "S",
    T: "T",
  };

  function convert(str) {
    const arr = [...str];

    const arr2 = arr.map((x) => {
      if (x === " ") {
        return x;
      } else {
        return obj[x];
      }
    });
    return arr2.join("");
  }

  function process(arr) {
    const out = arr.map((item) => convert(item));
    return out;
  }

  return process(arr1);
}

// const ret1 = eastOrWest(["east EAST", "e a s t", "E A S T"]);
// console.log(ret1);

//whitespace between lower and upper case letters

function insertWhiteSpace(str1) {
  const r = /[a-z][A-Z]/g;
  const str2 = str1.replace(r, (s) => {
    return s[0].concat(" ", s[1]);
  });

  return str2;
}

// const ret1 = insertWhiteSpace("TheGreatestUpsetInHistory");
// console.log(ret1);

//numbersInString
function numInString(arr1) {
  const r = /[\d]+/;
  const outArr = [];
  arr1.forEach((str) => {
    if (r.test(str)) {
      outArr.push(str);
    }
  });
  return outArr;
}

// const ret1 = numInString(["abc", "abc10"]);
// console.log(ret1);

//vowel link
function vowelLink(str1) {
  const vowels = "aeiou";
  function getFirstChar(str) {
    return str.charAt(0);
  }

  function getLastChar(str) {
    return str.charAt(str.length - 1);
  }

  function cmpr(st1, st2) {
    let ret = false;
    const lastChar = getLastChar(st1);
    const firstChar = getFirstChar(st2);
    if (vowels.includes(lastChar) && vowels.includes(firstChar)) {
      ret = true;
    }
    return ret;
  }

  function checkPair(str) {
    const arr1 = str.split(" ");
    let ret = false;
    for (let i = 0; i < arr1.length - 1; i++) {
      if (cmpr(arr1[i], arr1[i + 1])) {
        ret = true;
        break;
      }
    }
    return ret;
  }

  return checkPair(str1);
}

// const ret1 = vowelLink("a sudden applause");
// console.log(ret1);

// Do all bigrams exist
function biGramsExist(arrBi, arrDest) {
  function doeesExistInDest(bi, arr) {
    let ret = false;
    for (let item of arr) {
      if (item.includes(bi)) {
        ret = true;
        break;
      }
    }
    return ret;
  }

  function iterateSource(arr) {
    let ret = true;
    for (let bi of arr) {
      const r = doeesExistInDest(bi, arrDest);
      ret = ret && r;
    }
    return ret;
  }

  return iterateSource(arrBi);
}

// const ret1 = biGramsExist(
//   ["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]
// );
// console.log(ret1)

// reverse odd length words

function isOddLengthString(str) {
  const len = str.length;
  let isOdd = true;
  if (len % 2 === 0) {
    isOdd = false;
  }
  return isOdd;
}

function reverseOddLengthWords(word) {
  const arr1 = word.split(" ");
  const outArr = [];
  for (let item of arr1) {
    if (isOddLengthString(item)) {
      outArr.push([...item].reverse().join(""));
    } else {
      outArr.push(item);
    }
  }
  return outArr.join(" ");
}

// const ret1 = reverseOddLengthWords("One two three four");
// let a = 0

// left rotations and right rotations of string
function leftRotate(str) {
  const arr1 = [...str];
  const a = arr1.shift();
  arr1.push(a);
  return arr1.join("");
}

function rightRotate(str) {
  const arr1 = [...str];
  const a = arr1.pop();
  arr1.unshift(a);
  return arr1.join("");
}

function getAllRightRotations(str) {
  const outArr1 = [str];
  let rotated = str;
  for (let i = 0; i < str.length - 1; i++) {
    rotated = rightRotate(rotated);
    outArr1.push(rotated);
  }
  return outArr1;
}
// const ret1 = getAllRightRotations("abc");
// let a = 0;

function getUniqueArray(arr) {
  const newArr = [...new Set(arr)];
  return newArr;
}
// const ret1 = getUniqueArray([1,2,3,4,4,4,5])
// console.log(ret1)
