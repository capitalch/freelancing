function doSplice(){
    const arr1 = [1,3,5]
    //add
    arr1.splice(2,0,7,8,9)
    console.log(arr1)
}
doSplice()

function arraySort(){
    let arr1 = [9,3,4,2,2,1]
    arr1.sort((a,b)=>{
        if(a > b){
            return 1
        } else if (a < b){
            return -1
        } else {
            return 0
        }
    })
    console.log(arr1)
}

