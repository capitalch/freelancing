function nonDivisors(A){
    const ret = []
    function getNoOfNonDivisors(x){
        let qty =0
        A.forEach((y,ind)=>{
            if((x % y) !== 0){
                qty++
            }
        })
        return qty
    }

    A.forEach((x,index)=>{
        no = getNoOfNonDivisors(x)
        ret.push(no)
    })
    return ret
}
const a = [3,1,2,3,6]
const result = nonDivisors(a)
function dominator(arr) {
    const occurObj = {}
    if (arr === null) {
        arr = []
    }
    const halfLength = arr.length / 2
    let index = -1

    for (let i = 0; i < arr.length; i++) {
        if (occurObj[arr[i]]) {
            occurObj[arr[i]].qty = occurObj[arr[i]].qty + 1
            occurObj[arr[i]].index = i
            if (occurObj[arr[i]].qty >= halfLength) {
                index = i
                break
            }
        } else {
            occurObj[arr[i]] = {}
            occurObj[arr[i]].qty = 1
            occurObj[arr[i]].index = i
        }
    }
    return (index)
}

const arr = [1, 2, 4, 3, 3, 3, 3, 5]
// console.log(dominator(arr))
function swap(obj) {
    // for (entry in Object.entries(obj)) {
    //     console.log(entry)
    // }
    const swapObj = {}
    Object.entries(obj).forEach(([key, value])=>{
        swapObj[value] = key
    })
    console.log(swapObj)
}
swap({
    a: 1,
    b: 2,
    c: 2,
})
const x = 1

function solutionPairedArray(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    function isOdd(n) {
        return (n % 2) !== 0
    }

    function getPpreparedObj() {
        const tempObj = {}
        for (let a of A) {
            if (tempObj[a]) {
                tempObj[a]++
            } else {
                tempObj[a] = 1
            }
        }
        return tempObj
    }

    const preparedObj = getPpreparedObj()
    let ret = 0
    for (p in preparedObj) {
        if (isOdd(preparedObj[p])) {
            ret = +p
            break
        }
    }
    return ret
}

function frogJump(X, Y, D) {
    const dist = Y - X
    min = Math.round((dist / D) + 0.5)
    return min
}

function missingInt(A) {

    // const max = Math.max(...A)
    let ret = 0
    // for (let i = 1; i <= max; i++) {
    //     if (A.indexOf(i) === -1) {
    //         ret = i
    //         break
    //     }
    // }
    // if (ret === 0) {
    //     if (max < 0) {
    //         ret = 1
    //     } else {
    //         ret = max + 1
    //     }
    // }
    // return ret
    A.sort()
    const max = Math.max(...A)
    for (let i = 0; i < A.length; i++) {
        if ((i + 1) !== A[i]) {
            ret = i + 1
        }
    }
    if (ret === 0) {
        if (max < 0) {
            ret = 1
        } else {
            ret = max + 1
        }
    }
    return ret
}

// missingInt([-1,-3])