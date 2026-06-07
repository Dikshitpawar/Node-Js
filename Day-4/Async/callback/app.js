

//callback :- A function passed as an argument in function is called a callback

// function show(greet){
//     greet();
//     console.log("Dikshit");
// }
// function greet(){
//     console.log("Hello")
// }
// show(greet);





//callback-hell :- nested callbacks


// function show(callback) {
//     console.log("Dikshit");
//     callback();
// }

// function greet(callback) {
//     console.log("Hello");
//     callback();
// }

// function welcome(callback) {
//     console.log("Welcome");
//     callback();
// }

// function bye() {
//     console.log("Good Bye");
// }


// show(()=>{
//     greet(()=>{
//         welcome(()=>{
//             bye();
//         })
//     })
// })







setTimeout(()=>{
    console.log("Callback 1")

    setTimeout(()=>{
        console.log("Callback 2");


        setTimeout(()=>{
        console.log("Callback 3")
    },1000)

    },1000)

    
},1000)