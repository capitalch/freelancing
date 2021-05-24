function pluralize(arr1) {
  // const output = []
  function existsMul(arr, item) {
    const newArr = arr.filter((x) => x === item);
    return newArr.length > 1 ? true : false;
  }

  function removeDuplicate(arr) {
    const obj = {};
    for (let item of arr) {
      obj[item] = 1;
    }
    return Object.keys(obj);
  }

  const uniqueArray = removeDuplicate(arr1);
  const output = uniqueArray.map((x) => {
    let ret;
    if (existsMul(arr1, x)) {
      ret = x.concat("s");
    } else {
      ret = x;
    }
    return ret;
  });

  return output;
}

 const result = pluralize(["table", "table", "table"]);
 console.log(result)

