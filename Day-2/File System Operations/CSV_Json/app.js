const fs = require('fs');


//reading json file

// fs.readFile("../tp.json" , "utf-8" , (err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(JSON.parse(data))
// })




//Writing json files


// let data = {
//     name : "Dikshit",
//     age : 22,
//     state : "GUJ"
// }

// fs.writeFile("../tp.json" , JSON.stringify(data) , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Success")
// })






//CSV




// 1)READ csv file 
// const csv = require('csv-parser');

// let arr = [];

// const readStream = fs.createReadStream('../users.csv' , {encoding:"utf-8"})
// const parsedData = readStream.pipe(csv());

// parsedData.on("data" , (chunks)=>{
//     arr.push(chunks);
// })

// parsedData.on("end" , ()=>{
//     console.log(arr);
// })





// 2) WRITE csv file 

// const csvWriter = require('csv-writer').createObjectCsvWriter

// const csv = csvWriter({path : "../temp.csv" , header: [

//         { id: 'name', title: 'NAME' },

//         { id: 'age', title: 'AGE' },

//         { id: 'city', title: 'CITY' }

//     ]});

//     const data = [

//     {
//         name: 'Rahul',
//         age: 20,
//         city: 'Ahmedabad'
//     },

//     {
//         name: 'Amit',
//         age: 22,
//         city: 'Surat'
//     }

// ];

// csv.writeRecords(data).then(()=>{
//     console.log("Done")
// })















const users = [
    { id: 1, name: 'John Doe', age: 21 },
    { id: 2, name: 'Jane Doe', age: 22 }
];


function csvWrite(path , data){ 

    if(data.length === 0) return

    let headers = Object.keys(data[0]);

    let csvContent = headers.join(",") + "\n";

    data.forEach(obj =>{
        let val = headers.map(elem => obj[elem]);

        csvContent += val + "\n";
    })

    fs.writeFileSync(path , csvContent, 'utf-8')

    console.log("CSV file writen in " , path)

}

csvWrite('../temp.csv' , users)