"type strict";
const arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(0, 3, 4);
function sol12() {
    //armstrong number
    const n = 153;
    const an = [...String(n)];
    const len = an.length;
    let tot = 0;
    an.forEach(x => {
        tot = tot + Math.pow(+x, len);
    });
    console.log(tot === n);
}
sol12();
function sol11() {
    //check credit card number
    const credit = '4539 1488 0343 6467';
    const arrCredit = [...credit].filter(x => x != ' ');
    const revCredit = arrCredit.reverse();
    const revCreditProduct = revCredit.map((x, i) => {
        let y = Number(x);
        if (((i + 1) % 2) === 0) {
            y = y * 2;
            if (y > 9) {
                y = y - 9;
            }
        }
        return y;
    });
    const revCreditSum = revCreditProduct.reduce((prev, num) => { return (prev + num); }, 0);
    if ((revCreditSum % 10) === 0) {
        console.log('Correct');
    }
    else {
        console.log('wrong');
    }
}
sol11();
function sol10() {
    const str = 'webmaster';
    const out = [...str].sort().join('');
    return out;
}
sol10();
function sol9() {
    //Armstrong number
    const out = [];
    let n;
    let sumCube = 0;
    let strNum = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                let str = "".concat(String(i), String(j), String(k));
                if ((i != 0)) {
                    let strArr = [...str];
                    strNum = Number(str);
                    sumCube = 0;
                    while (strArr.length > 0) {
                        let dgt = Number(strArr.pop());
                        sumCube = sumCube + (dgt * dgt * dgt);
                    }
                    if (sumCube === strNum) {
                        out.push(sumCube);
                    }
                }
            }
        }
    }
    return out;
}
sol9();
function sol8() {
    //swap key values of object
    const obj = { name: 'Sushant', Address: "12 J.L", phone: '222899987', gender: 'Male' };
    const out = {};
    for (let prop in obj) {
        out[obj[prop]] = prop;
    }
    return out;
}
sol8();
function sol7() {
    // convert object to array of name value pairs
    const obj = { name: 'Sushant', Address: "12 J.L", phone: '222899987', gender: 'Male' };
    const out = [];
    for (let prop in obj) {
        out.push({ [prop]: obj[prop] });
    }
    return out;
}
sol7();
function sol6() {
    // all possible strings from a given string
    const str = 'dog';
    const out = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let temp = str.slice(i, j);
            out.push(temp);
        }
    }
    return out;
}
sol6();
function sol5() {
    let a = 19876;
    let b = 7656547;
    const len = Math.max(String(a).length, String(b).length);
    let carry = 0;
    let prevCarry = 0;
    for (let i = 0; i < len; i++) {
        let r1 = a % 10;
        let r2 = b % 10;
        if ((r1 + r2 + prevCarry) > 9) {
            prevCarry = 1;
            carry++;
        }
        else {
            prevCarry = 0;
        }
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }
    return carry;
}
sol5();
function sol4() {
    //capitalize each first letter of word in a string
    let s = 'he was very thin';
    const arrS = s.split(' ');
    const arrT = arrS.map(x => {
        let arrX = [...x];
        arrX[0] = arrX[0].toUpperCase();
        x = arrX.join('');
        return x;
    });
    const s1 = arrT.join(' ');
    return s1;
}
sol4();
function noOfCarry() {
    const a = 19876;
    const b = 7656547;
    const arrA = [...String(a)].reverse();
    const arrB = [...String(b)].reverse();
    const len = Math.max(arrA.length, arrB.length);
    let prevcarry = 0;
    let carry = 0;
    for (let i = 0; i < len; i++) {
        let aa = +arrA[i] || 0;
        let bb = +arrB[i] || 0;
        if ((aa + bb + prevcarry) > 9) {
            carry++;
            prevcarry = 1;
        }
        else {
            prevcarry = 0;
        }
    }
    return carry;
}
noOfCarry();
function sol3() {
    //string reverse
    const s = 'I am a boy';
    const s1 = [...s].reverse().join('');
    return s1;
}
sol3();
function sol2() {
    //function to move in array from one position to other
    const arr1 = [1, 2, 3, 4, 5];
    function mov(arr, start, end) {
        const plucked = arr.splice(start, 1)[0];
        arr.splice(end, 0, plucked);
    }
    const arr2 = mov(arr1, -1, -2);
}
sol2();
function sol1() {
    // select random member of array
    const arr = [2, 4, 6, 3, 2];
    function getRandomMember() {
        let index = Math.random() * arr.length;
        index = parseInt(String(index));
        return (arr[index]);
    }
    console.log(getRandomMember());
}
sol1();
// put - between two even numbers of a string
function isEven(n) {
    return (n % 2) == 0;
}
let prevEven = false;
function doDash(str) {
    const arr1 = [...str].map(Number);
    let out = '';
    arr1.forEach(x => {
        if (isEven(x)) {
            if (prevEven) {
                out = out.concat('-', String(x));
            }
            else {
                out = out.concat(String(x));
            }
            prevEven = true;
        }
        else {
            prevEven = false;
            out = out.concat(String(x));
        }
    });
    return out;
}
const str = doDash('2234568');
// console.log(str); // 2-23456
//find most frequent number in an array
function mostFrequent(arr) {
    const obj1 = {};
    arr.forEach(x => {
        if (obj1[x]) {
            obj1[x]++;
        }
        else {
            obj1[x] = 1;
        }
    });
    let maxObj = {};
    let max = 0;
    for (let prop in obj1) {
        if (obj1[prop] > max) {
            max = obj1[prop];
            maxObj = { [prop]: max };
        }
    }
    return Object.keys(maxObj)[0];
}
const arr2 = [1, 2, 2, 2, 3, 3, 3, 3, 4];
console.log(mostFrequent(arr2));
//swap char case
function swapCase(str) {
    function isLowerCase(c) {
        const c1 = c.toLowerCase();
        return c1 === c;
    }
    let out = '';
    for (let i = 0; i < str.length; i++) {
        if (isLowerCase(str[i])) {
            out = out.concat(str[i].toUpperCase());
        }
        else {
            out = out.concat(str[i].toLowerCase());
        }
    }
    return out;
}
const s = swapCase('Blue Fox');
console.log(s);
//sum of two array indexes
function sumArray(arr1, arr2) {
    const maxIndex = Math.max(arr1.length, arr2.length);
    const out = [];
    for (let i = 0; i < maxIndex; i++) {
        out.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return out;
}
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
console.log(sumArray(array1, array2));
//# sourceMappingURL=ex2.js.map