const https = require('https');
const axios = require('axios')

async function getUserNames1(thr) {
    let allUsers = []
    let noOfPages = 0
    const resp = await axios.get('https://jsonmock.hackerrank.com/api/article_users?page=1')
    const respData = resp.data
    noOfPages = respData.total_pages

    for (let i = 1; i <= noOfPages; i++) {
        const url = `https://jsonmock.hackerrank.com/api/article_users?page=${i}`
        let res = await axios.get(url)
        const resData = res.data
        allUsers = allUsers.concat(resData.data)
    }

    const activeUsers = allUsers.filter((item) =>
        item.submission_count > thr
    )

    const activeUserNames = activeUsers.map((x)=>x.username)

    console.log(activeUserNames)
}

// async function getUsernames(threshold) {
//     // return ['epaga', 'panny', 'olalonde', 'WisNorCan', 'dmmalam', 'replicatorblog', 'vladikoff', 'mpweiher', 'coloneltcb', 'guelo']
//         let allUsers = []
//         let noOfPages = 0
//         const resp = await axios.get('https://jsonmock.hackerrank.com/api/article_users?page=1')
//         const respData = resp.data
//         noOfPages = respData.total_pages
    
//         for (let i = 1; i <= noOfPages; i++) {
//             const url = `https://jsonmock.hackerrank.com/api/article_users?page=${i}`
//             let res = await axios.get(url)
//             const resData = res.data
//             allUsers = allUsers.concat(resData.data)
//         }
    
//         const activeUsers = allUsers.filter((item) =>
//             item.submission_count > threshold
//         )
    
//         const activeUserNames = activeUsers.map((x)=>x.username)
//         console.log(activeUserNames)
//         return(activeUserNames)
        
//     }

function getUsernames(threshold) {
    // return ['epaga', 'panny', 'olalonde', 'WisNorCan', 'dmmalam', 'replicatorblog', 'vladikoff', 'mpweiher', 'coloneltcb', 'guelo']
        
        const f = async ()=>{
            let allUsers = []
            let noOfPages = 0
            const resp = await axios.get('https://jsonmock.hackerrank.com/api/article_users?page=1')
            const respData = resp.data
            noOfPages = respData.total_pages
        
            for (let i = 1; i <= noOfPages; i++) {
                const url = `https://jsonmock.hackerrank.com/api/article_users?page=${i}`
                let res = await axios.get(url)
                const resData = res.data
                allUsers = allUsers.concat(resData.data)
            }
        
            const activeUsers = allUsers.filter((item) =>
                item.submission_count > threshold
            )
        
            const activeUserNames = activeUsers.map((x)=>x.username)
            console.log(activeUserNames)
            return(activeUserNames)
        }
        return f()
    }

const result = getUsernames(10)
// getUsernames(10)

const allUsers = []

