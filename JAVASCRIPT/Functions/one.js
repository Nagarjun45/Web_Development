// Functions Without Parameters.
function Display1() {
  console.log("My Name Is Nagarjun");
}

Display1();

// Functions with parametrs and arguments.

function add(a, b) {
  let z = a + b;
  console.log(z);
}

add(10, 20);

// In JS engine don't check how many arguments pass to parameter thats why it is not showing any error.

function Display2(name) {
  console.log(name);
}
Display2(12, 13);

// Using Concatenation concept

function Display3(Fname, Lname) {
  console.log(Fname + " Devrao " + Lname);
}

Display3("Nagarjun", "Honrao");

// Missing Argument Pass to parametrs.

function mult(a, b, c) {
  console.log("A:- " + a + " B:- " + b + " C:- " + c);
}
mult(10, 20);

// If we given less parameters than arguments then it will throw error to avoid this situation and to access that third parameter we use argument object.

/*function mult(a,b,){
    // It will throw error that c is not defined
    console.log("A:- "+ a +" B:- "+ b +" C:- "+ c)
}
mult(10,20,30)*/

function mult(a, b) {
  console.log("A:- " + a + " B:- " + b + " C:- " + arguments[2]);
}
mult(10, 20, 30);

// Argument Object.

function Disp(name1, name2) {
  arguments[1] = "Devta";
  // console.log(arguments[0]+" ");
  // console.log(arguments[1]);

  console.log(arguments[0] + " " + arguments[1]);
}
Disp("Nag", "Nagin");

// To know how many arguments pass to a function.

function num(a, b) {
  console.log(
    "Number of arguments passed to a function are :-",
    arguments.length
  );
}
num(10, 20);

// By Using For loop in Argument Object.

function disp(name1, name2, name3) {
  // arguments[2]=27;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i] + " ");
  }
}

disp("Nagarjun", 25, 40000);

// To know about your function we use callee.

function show(Name1, name2, name3) {
  console.log(arguments.callee);
}
show("Naga", 45, "Rohit");

console.log(
  "--------------------------------------------------------------------"
);

// Default parameter.

function show1(a, b, c = 1) {
  // We always give default parameter to a last value.
  console.log("A:- " + a + " B:- " + b + " C:- " + c);
}
show1(2, 3);

function show2(a, b = 1, c) {
  // If we give default parameter in between values without giving to last values it will give Undefined as O/p.
  console.log("A:- " + a + " B:- " + b + " C:- " + c);
}
show2(2, 3);

function show3(a, b = 1, c) {
  // Argument value has more pripority than parameter value in function.
  console.log("A:- " + a + " B:- " + b + " C:- " + c);
}
show3(2, 3, 4);

function show4(a, b = 1, c = 5) {
  // Agar hamne bich wale parameter ko default value di hai to uske baad wale parameters ko bhi default value deni padti hai warna wo third value ke liye Undefined O/P dega.
  console.log("A:- " + a + " B:- " + b + " C:- " + c);
}
show4(2, 3);

// Rest Parameters in function. (...args)

function deal(...args) {
  console.log(args);
}
deal(10, 20, 30, 40);

function khel(a, ...args) {
  console.log("The Value of a is :-", a);
  console.log("The Value of args :-", args);
}
khel(10, 20, 30, 40, 50, 60, 70);

// We can access any value from list

function khel2(a, ...args) {
  console.log("The Value of a is :-", a);
  console.log("The particular value from args :-", args[3]);
}
khel2(10, 20, 30, 40, 50, 60, 70);

// Rest Parameters Vs Argumments.-----> The main difference is that in rest parametrs if first value is assign to another then it will take from second but in arguments it will consider all values if we given first value to another also.

function rest(a, ...args) {
  console.log("The Value of a is :-", a);
  console.log("The Value of args :-", args);
}
rest(10, 20, 30, 40, 50, 60, 70);

function argu(a) {
  console.log("The Value of a is :-", a);
  console.log("The Value of arguments :-", arguments);
}
argu(10, 20, 30, 40, 50, 60, 70);

// Return statement in function. (It stores the respective result)

function f_name(a, b) {
  return a + b;
}
var z = f_name(10, 20);
console.log("The Addition of Given Values is :-", z);

    