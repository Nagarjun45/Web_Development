// Declaration and Initialization of object

var fees = {};

/*fees["Nagarjun"] = 100;
fees["Ankur"] = 200;
fees["Pooja"] = 300;
fees["Ana"] = 400;
fees["Prashant"] = 500;

console.log(fees["Nagarjun"]);*/

/*fees.Nagarjun = 100;
fees.Ankur = 200;
fees.pooja = 300;
fees.ana = 400;
fees.akash = 500;

console.log(fees.ana);*/

// fees["Nagarjun Honrao"] = 300;

// console.log(fees["Nagarjun Honrao"]);

function Sum(a, b) {
  console.log(a + b);
}
Sum = (10, 20);

fees["total"] = Sum;
console.log(fees["total"]);

// Declaration and Initialization of object together.

var fees = {
  Nagarjun: 100,
  Akash: 200,
  Pooja: 300,
  Ana: 400,
  total: function () {
    return 400 + 200;
  },
};

console.log(fees["Nagarjun"]);
console.log(fees.Pooja);
console.log(fees.total());
