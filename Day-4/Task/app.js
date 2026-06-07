// 1. Basic Callback
// Create a function greet(name, callback) that prints:
// Hello, John!
// Welcome!
// Use a callback to print "Welcome!".


// function greet(name , callback){
//     console.log("Hello," , name);
//     callback()
// }
// greet("John" , function(){
//     console.log("Welcome!")
// })










// 2. Delayed Message
// Use setTimeout() to print:
// Loading...
// Done!
// where "Done!" appears after 2 seconds.

// console.log("Loading...")
// setTimeout(()=>{
//     console.log("Done")
// },2000)








// 3. Callback Calculator
// Create a calculator function that accepts two numbers and a callback operation.
// Example:
// calculator(5, 3, add);
// Output:
// 8

// function calculator(a,b,callback){
//     callback(a,b);
// }
// function add(a,b){
//     console.log(a+b);
// }
// calculator(5,3,add);







// 4. Create a Promise
// Create a Promise that resolves with:
// "Data fetched successfully"
// and display it using .then().

// const promise = new Promise((res)=>{
//     res("Data fetched successfully")
// })
// promise.then((data)=>{
//     console.log(data)
// })






// 5. Async Function
// Create an async function that returns:
// "Hello Async World"
// and print the result.

// function print(){
//     return new Promise((res)=>{
//         res("Hello Async World")
//     })
// }

// async function fetched(){
//     const data = await print();
//     console.log(data);
// }

// fetched()






// 1. Simulate API Request
// Create a Promise that resolves after 3 seconds with:
// {
//   id: 1,
//   name: "John"
// }
// Use async/await to display the data.

// function print(){
//     let data = {
//         id : 1,
//         name : "John"
//     }
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(data);
//         }, 3000);
//     })
// }

// async function fetch(){
//     const answer = await print();
//     console.log(answer)
// }
// fetch()








// 2. Callback Hell Example
// Simulate:
// Get User
//  ↓
// Get Orders
//  ↓
// Get Order Details
// using nested callbacks.
// Then rewrite it using Promises.

// function getUsers(callback){
//     console.log("Users")
//     callback()
// }
// function getOrders(callback){
//     console.log("Orders")
//     callback()
// }
// function getOrderDetail(){
//     console.log("Order Detail")
    
// }

// getUsers(()=>{
//     getOrders(()=>{
//         getOrderDetail();
//     })
// })








// 3. Promise.all()
// Create three Promises:
// fetchUsers()
// fetchPosts()
// fetchComments()
// each resolving after different delays.
// Use Promise.all() to wait for all results.

// function fetchUsers(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Fetched user")
//         },1000)
//     })
// }
// function fetchPosts(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Fetched posts")
//         },2000)
//     })
// }
// function fetchComments(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Fetched comments")
//         },3000)
//     })
// }

// function fetch(){
//     let data1 = fetchUsers();
//     let data2 = fetchPosts();
//     let data3 = fetchComments();

//     Promise.all([data1 , data2, data3]).then((data)=>console.log(data)).catch((err)=>console.log(err));
// }
// fetch()









// 4. Promise.race()
// Create:
// fastServer()
// slowServer()
// The faster Promise should win the race.
// Display the winner.

// function fastServer(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Fast server")
//         },1000)
//     })
// }
// function slowServer(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Slow server")
//         },2000)
//     })
// }
// function fetch(){
//     let data1 = fastServer();
//     let data2 = slowServer();

//     Promise.race([data1,data2]).then((data)=>console.log(data)).catch((err)=>console.log(err));
// }
// fetch()








// 5. Error Handling
// Create a Promise that randomly:
// resolves with "Success"
// rejects with "Something went wrong"
// Handle both cases using:
// try/catch
// with async/await.

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








// 6. Blocking vs Non-blocking
// Predict the output:
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// console.log("C");
// Explain why.

// Non-Blocking , because here the settimeout is async task which is run in background and it not blocks the next operation. javascript handles this using event loop.











// 1. Fake E-commerce Flow
// Build this flow:
// Login User
//  ↓
// Fetch Products
//  ↓
// Add Product to Cart
//  ↓
// Checkout
// Requirements:
// Each step returns a Promise.
// Use async/await.
// Handle errors properly.

// function loginUser(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("user loged in")
//         },1000)
//     })
// }
// function fetchProduct(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Product fetched")
//         },1000)
//     })
// }
// function addToCart(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Add to Cart")
//         },1000)
//     })
// }
// function checkOut(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("Check out")
//         },1000)
//     })
// }
// async function fetch(){
//    try {
//      let data1 = await loginUser();
//     console.log(data1)
//     let data2 = await fetchProduct();
//     console.log(data2)
//     let data3 = await addToCart();
//     console.log(data3)
//     let data4 = await checkOut();
//     console.log(data4)
//    } catch (error) {
//     console.log(error)
//    }
// }
// fetch()



