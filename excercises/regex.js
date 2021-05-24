// const s = 'ggvf  hg%^ uuuI ujju8* as' // find all words
// const r = /[^0-9a-zA-Z]/g
// const s1 = s.replace(r, ' ')
// const s2 = s1.replace(/\s+/g,' ')
// console.log(s2)

const s = 'aaabvncdsasdsa' // count a
const r = /a/g
const res = r.exec(s)
const res1 = s.match(r)
console.log(res1)