function FindIntersection (strArr) {
  const str0 = strArr[0].replace(/\s+/g, '')
  const str1 = strArr[1].replace(/\s+/g, '')
  const arr0 = str0.split(',')
  const arr1 = str1.split(',')
  const out = []
  arr0.forEach(x => {
    if (arr1.indexOf(x) !== -1) {
      out.push(x)
    }
  })
  let ret
  if(out.length === 0){
    ret = false
  } else {
    ret = out.join()
  }
  // code goes here
  // console.log(ret)
  return ret
}

FindIntersection(['1, 3, 4, 7, 13', ''])
