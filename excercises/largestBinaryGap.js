function solution(N) {
    let binary = N.toString(2)
    let count = 0
    let allCounts = []
    for (c of binary) {
        if (c === '1') {
            allCounts.push(count)
            count = 0
        } else {
            count++
        }
    }
    const out = Math.max(...allCounts)
    return out
}
// solution(99)

function cyclicRotation(A, K){
    for(let i= 0; i< K; i++){
        const a = A.pop()
        A.unshift(a)
    }
}

// cyclicRotation([1,2,3,4,5], 3)

function reverseString(S){
    return Array.from(S).reverse().join()
}

const rev = reverseString('He is a boy')

function max(A){
    return Math.max(...A)
}
console.log(max([1,2,45]))

console.log(Object.values(obj)); // ['bar', 42];             // returns true
