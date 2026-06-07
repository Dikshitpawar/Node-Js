
// function show(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Resolved")
//         },5000);
//     })
// }

// async function fetch(){
//     console.log("Start")
//     let data = await show();
//     console.log(data)
//     console.log("End")
// }

// fetch();









//erro handling in async code;

// function show() {
//     return new Promise((res, rej) => {
//         let flag = false
//         if (flag) {
//             setTimeout(() => {
//                 res("Resolved")
//             }, 5000);
//         }
//         else {
//             setTimeout(() => {
//                 rej("Rejected")
//             },0)
//         }
//     })
// }


// async function fetch() {
//     try {
//         console.log("Start")
//         let data = await show();
//         console.log(data)
//         console.log("End")
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetch();
