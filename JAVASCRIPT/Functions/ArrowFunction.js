// Function expression
var myfun1 = function show(){
    console.log("Nagarjun");
}
myfun1();

// Anonymous function

var myfun2 = function(){
    console.log("Nagarjun Honrao");
}
myfun2();

// Arrow function

var myfun=()=>{console.log("Aree Vedya Bat ka Grip.....");};
myfun();

// Arrow function with parameters

var add= (a,b) =>{console.log("Addition of Two numbers is :-",a+b);};
add(10,20)


// Arrow function with Default parameter

var num= (a,b=5) =>{console.log("Addition of Two numbers is :-",a+b)};
num(2)

// Arrow function with rest parameters

var gig = (...nums) => {console.log(nums);};
gig(10,20,30,40,50,60,70,80)

// For single line code we need not give curly braces.

var akash = a => console.log("Akash")
akash();


// For multiple lines

var naga= a => {console.log(a);
console.log("NagaMass");};

naga(10);








