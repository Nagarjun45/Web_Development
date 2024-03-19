// Simple For Loop Example

// for(let i=1;i<10;i++){
//     console.log(i)
// }

// For Loop Without Initializer

// let j=1;
// for(;j<10;j+=2){
//     console.log(j)
// }


// For Loop Without Condition

// for(let j=1;;j+=2){
//     console.log(j);
//     if(j>10){
//         break;
//     }
// }

// For loop omit all three conditions

// let i=1;
// for(;;){
//     if(i>10){
//         break;
//     }
//     console.log(i);
//     i+=2;
// }


// For Loop Without the loop body

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);