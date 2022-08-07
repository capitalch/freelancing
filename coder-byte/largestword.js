// the largest word in a string.
function LongestWord (sen) {
  const sen1 = sen.replace(/[^a-zA-Z0-9\s]/g, '')
  const arr = sen1.split(' ')
  let maxLength = 0,
    maxWord = ''
  arr.forEach(x => {
    if (x.length > maxLength) {
      maxLength = x.length
      maxWord = x
    }
  })
  // code goes here
  console.log(maxWord)
  return maxWord
}

function FirstReverse (str) {
  const arr1 = Array.from(str).reverse()
  const str1 = arr1.join('')
  // code goes here
  return str1
}

function FirstFactorial (num) {
  let out = 1
  for (let i = 1; i <= num; i++) {
    out = out * i
  }
  return out
}

FirstFactorial(0)
