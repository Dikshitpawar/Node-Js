


// const promise = new Promise((res,rej)=>{
//     let ans = true
//     if(ans){
//         res("Resolved")
//     }
//     else{
//         rej("Rejected")
//     }
// })

// promise.then((data)=>{
// console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })
// .finally(()=>{
//     console.log("Always executes");
// })




// function show(callback) {
//     return new Promise((res)=>{
//         console.log("Dikshit")
//         res()
//     })
// }

// function greet(callback) {
//     return new Promise((res)=>{
//         console.log("Hello")
//         res()
//     })
// }

// function welcome(callback) {
//     return new Promise((res)=>{
//         console.log("Welcome")
//         res()
//     })
// }

// function bye() {
//     return new Promise((res)=>{
//         console.log("Goodby")
//         res()
//     })
// }

// show().then(()=>greet())
// .then(()=>welcome())
// .then(()=>bye())
// .then(()=>console.log("Done"))
// .catch((err)=>console.log(err))










//Promise.all :-


// const p1 = new Promise((res,rej)=>{
//     let ans = true
//     if(ans){
//         res("Resolved")
//     }
//     else{
//         rej("Rejected")
//     }
// })

// const p2 = new Promise((res,rej)=>{
//     let ans = true
//     if(ans){
//         res("Resolved")
//     }
//     else{
//         rej("Rejected")
//     }
// })

// const p3 = new Promise((res,rej)=>{
//     let ans = false
//     if(ans){
//         res("Resolved")
//     }
//     else{
//         rej("Rejected")
//     }
// })

// const p4 = new Promise((res,rej)=>{
//     let ans = true
//     if(ans){
//         res("Resolved")
//     }
//     else{
//         rej("Rejected")
//     }
// })


// Promise.all([p1,p2,p3,p4])
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })










//Promise.race :-

// const p1 = new Promise((res)=>{
//     setTimeout(()=>{
//         res("Promise 1")
//     },1000)
// })

// const p2 = new Promise((res)=>{
//     setTimeout(()=>{
//         res("Promise 2")
//     },1000)
// })


// Promise.race([p1,p2])
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })







//Promise.any();



// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("Rejected");
//     },1000)
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Resolved");
//     },2000)
// })
// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Resolved");
//     },3000)
// })

// Promise.any([p1,p2,p3]).then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })





