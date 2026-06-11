//Buffer.alloc()
//buffer.toString()
//buffer.length
//Buffer.isBuffer(obj)
//Buffer.concat([])
//buffer.slice(start,end)
//buffer.copy(target,targetstart, sourceStart, sourceEnd)
//Buffer.from(data)
//buffer.write()



    








//1) Buffer.alloc()

// const buffer = Buffer.alloc(10);
// console.log(buffer)






//2) Bufffer.from(data)

// const buffer1 = Buffer.from("Hello")
// const buffer2 = Buffer.from([10,20,30]);
// console.log(buffer1)
// console.log(buffer2)






//3) buffer.toString()
// const buffer1 = Buffer.from("Hello")
// console.log(buffer1.toString());






//4) buffer.length
// const buffer1 = Buffer.from("Hello")
// console.log(buffer1.length)






//5) buffer.write()

// const buffer = Buffer.alloc(10);
// buffer.write("Hello");
// console.log(buffer)

// //with offset (Parameter as an index)
// buffer.write("Hello" , 0);
// buffer.write("js" , 6)
// console.log(buffer)







//6) buffer.isBuffer();

// const buffer = Buffer.alloc(10)
// console.log(Buffer.isBuffer(buffer))
// console.log(Buffer.isBuffer(Buffer.from("hello")))
// console.log(Buffer.isBuffer("hello"))






//7) Buffer.concat();

// const b1 = Buffer.from("Hello");
// const b2 = Buffer.from("World");

// const result = Buffer.concat([b1,b2]);
// console.log(result.toString())










//8) buffer.slice(start,end);

// const buffer = Buffer.from("Helllo");
// let result = buffer.slice(0,3)
// console.log(result)





//9) buffer.copy(target , targetStart, sourceStart, sourceEnding);


// const b1 = Buffer.from("Hello");
// const b2 = Buffer.alloc(5);

// b1.copy(b2 , 0 , 1 , 3)
// console.log(b2.toString())

