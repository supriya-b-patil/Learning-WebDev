// function sum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
    
// }
// let supriya = [1,2,3,4,5,6,7,8,9,10]

// function easySum(array){
//     n = array.length+1 ;
//     re = (n*(n + 1))/2;
//     return re;
// }
// console.log(easySum(supriya));

// to pass n number of parameters
function supriya(){
    // argument
    let sum = 0 ;
    for(let i = 0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum 
}
console.log(supriya(5,6,5,4,5,58))

// object
let my_object = {
    fname: "Supriya",
    lname: "Patil",
    education: "MCA",
    rollNo: 222011038,
}

console.log(my_object["fname"]);
console.log(my_object.education);

my_object.rollNo = 38;
console.log(my_object.rollNo)

// method in an object
// for in loop
for (let x in my_object){
    console.log(my_object[x]);
}



for (let y in my_object){
    console.log(`${y}:${my_object[y]}`);
}