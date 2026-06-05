



//  CSV to JSON Converter
// In this like pass the data like id, name , class in csv format and convert in into json format.


//Json to CSV


const fs = require('fs');

// const users = [
//     { id: 1, name: 'Aman', class: "XII" },
//     { id: 2, name: 'Rahul', class: "X" }
// ];

// function csvWrite(path , data){ 

//     if(data.length === 0) return

//     let headers = Object.keys(data[0]);

//     let csvContent = headers.join(",") + "\n";

//     data.forEach(obj =>{
//         let val = headers.map(elem => obj[elem]);

//         csvContent += val + "\n";
//     })

//     fs.writeFileSync(path , csvContent, 'utf-8')

//     console.log("CSV file writen in " , path)

// }

// csvWrite('../temp.csv' , users)









// CSV to JSON

function converJson(path){

    const data = fs.readFileSync(path , {encoding : 'utf-8'});
    const lines = data.trim().split("\r\n")
    
    const header = lines[0].split(',')

    let res = [];

    for(let i=1; i<lines.length; i++){
        let value = lines[i].split(",");
        let ans = {};

        header.forEach((item,idx)=>{
            ans[item] = value[idx];
        })
        res.push(ans)
    }   

    return res;

}

console.log(converJson('../users.csv'))







