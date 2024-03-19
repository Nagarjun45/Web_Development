// Anonymous function in a variable

var a = function () {
  console.log("Nagarjun");
};
a();




// Passing string as argument

function disp(myfun) {
  return myfun;
}
console.log(disp("Naga As A Developer (NAAD)"));





// Passing anonymous function as argument

function show(myfun) {
  return myfun(); /* myfun treated as variable */
}

console.log(
  show(function () {
    return "Nagarjun Honrao";
  })
);




// Returning an anonymous functtion

function display(a) {
  return function (b) {
    return a + b;
  };
}

var af = display(10);
console.log(af(20));






function moye(a, b) {
  return function (c) {
    return (a / b) * c;
  };
}
var na = moye(2, 5);
console.log(na(10));
