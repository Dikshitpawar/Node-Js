const url = require('url')
const {URL , URLSearchParams} = require('url')

// const myUrl = new URL('https://example.com/path?name=harry');
const myUrl = new URL("http://localhost:3000/products?id=10&name=phone/")
console.log(myUrl.hostname);
console.log(myUrl.pathname);


let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr, true);
console.log(q)



console.log(myUrl.searchParams.has("id"))

console.log(myUrl.searchParams.get('id'))

myUrl.searchParams.set("name","laptop")
console.log(myUrl.href);

myUrl.searchParams.delete("name")
console.log(myUrl.href)