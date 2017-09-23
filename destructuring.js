/**
 * Arrays
 */
var [a, b] = [10, 20];
debugger;





// Array w/ Rest
var [a, b, ...rest] = [10, 20, 30, 40, 50];
debugger;




// Default values
var [a=5, b=7] = [1];
debugger;




// Swapping variables
var a = 1;
var b = 3;

[a, b] = [b, a];
debugger;







/**
 * Object
 */
var o = {p: 42, q: true};
var {p, q} = o;
debugger;





// Object w/ Rest
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
debugger;





// Assigning to new variable names
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
debugger;





// Default values
var {a = 10, b = 5} = {a: 3};
debugger;




// Assigning to new variables names and providing default values
var {a:aa = 10, b:bb = 5} = {a: 3};
debugger;



// Nested object and array destructuring
var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}
debugger;
