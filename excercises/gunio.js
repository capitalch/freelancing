function getValue(c) {
    let ret = 0
    const allChars = 'abcdefghijklmnopqrstuvwxyz'
    const vowels = 'aeiou'

    const x = c.toLowerCase()
    if (vowels.includes(x)) {
        ret = -(c.charCodeAt(0))
    } else if (allChars.includes(x)) {
        ret = c.charCodeAt(0)
    }

    return ret
}

// const sentence = 'Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve'
// let sum = 0
// const arr = sentence.split('')
// arr.forEach(m => {
//     sum = sum + getValue(m)
// })

// console.log(sum)

function decimalToRoman(value) {
    var romanNum = new Array();
    romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // decimal number
    var dNum = new Array();
    dNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    if (value <= 0 || value >= 4000)
        return value;
    var romanNumeral = "";
    for (var i = 0; i < romanNum.length; i++) {
        while (value >= dNum[i]) {
            value -= dNum[i];
            romanNumeral += romanNum[i];
        }
    }
    return romanNumeral;
}
function getSeries(val){
    const series = []
    for(let i=1; i<=val;i++){
        series.push(i)
    }
    return series
}

function getRomanSeries(arr){
    const romanArray = []
    arr.forEach(element => {
        romanArray.push(decimalToRoman(element))
    })
    return romanArray
}
const value = 2660
const series = getSeries(value)
const romanSeries = getRomanSeries(series)
const romanString = romanSeries.join('')
const romanArray = romanString.split('')
let xCount = 0

romanArray.forEach(x=>{
    if(x==='X'){
        xCount++
    }
})

console.log(xCount);
// const val = decimalToRoman(9)
// console.log(val)

function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
  }

  