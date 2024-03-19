var i = 10;
function show() {
  let j = 20;
  console.log(j);
  console.log(i);
}
show();

function demo() {
  var j = "J is the outer function local variable";
  console.log(j);
  function disp() {
    var k = "K is the inner function local variable";
    console.log(k);
    console.log(j);
  }
  disp();
}
demo();
