// let  n = prompt("please enter the number");
 
//     let addition = 0;

//     for(let i = 1; i <= n ; i++) {

//     addition = addition + i;
    
// }
//    console.log(addition);

// num = prompt(Math.abs());
// let count = 0;

// do{
//     count ++;
//     num = Math.floor(num/10);
// } while(num > 0){
//     console.log(count);
// }
 


// for(let i = 1; i <= 10; i++){
    
//     console.log(i);
// }

// var str = "Hellow World" ;

//  var newstring = str.split(" ").map(function(word){
//     return (str.split(" ").reverse().join(""));
// })

// console.log(newstring.join(""));

let drop = document.querySelector(".div");
let menubtn = document.querySelector(".menu");

menubtn.addEventListener("click",() => {
 
    if (turn0 == true) {
        drop.classList.remove("hide");
        turn0 = false;
        
    } else {
        drop.classList.add("hide");
        turn0 = true;
    }
}
);
// function ax(){
// let a = 8;
// console.log(a);
// }

// ax();
// console.log(a);

// function hellow1(){
//     messege = "good marning";
//     console.log("hellow1: " + messege);
// }

// hellow1();

setTimeout ( () => {
    console.log("the end");
},2000)