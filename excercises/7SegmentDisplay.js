function longest7SegmentWord(arr1) {
  function isValidWord(word) {
    const omissions = "kmvwx";
    let ret = true;
    for (let a of word) {
      if (omissions.includes(a)) {
        ret = false;
      }
    }
    return ret;
  }

  function getValidArray(arr) {
    const output = [];
    for (let item of arr) {
      if (isValidWord(item)) {
        output.push(item);
      }
    }
    return(output)
  }

  function getLargest(arr){
      let largest = 0
      let str = ''
      for(let x of arr){
        if(x.length > largest){
            largest = x.length
            str = x
        }
      }
      return(str)
  }

  const outArray = getValidArray(arr1)
  const largestString = getLargest(outArray)
  return(largestString)
}

const x = longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]);
console.log(x)
