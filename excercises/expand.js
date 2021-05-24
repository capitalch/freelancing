function expand(str1) {
  let arr1 = [...str1];

  function process() {
    let outArray = [];
    let waitNum = 0;
    for (let c of arr1) {
      if (Number.isInteger(+c)) {
        waitNum = +c;
      } else {
        outArray.push(c.repeat(waitNum));
      }
    }
    return outArray.join('');
  }

  return process()
}

console.log(expand("3Mat"));
