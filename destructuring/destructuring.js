// Array
var arr = [1,2,3];
[a, b] = arr;

// Array w/ Rest
var arr = [1,2,3,4,5,6,7];
[a, b, ...rest] = arr;

// Default values
var arr = [1,2];
[a, b, c = 5] = arr;

// Swapping variables
var a = 'a';
var b = 'b';
[a,b] = [b,a]


// Object
var foo = {
  a: 'a',
  b: 'b'
};
var {a,b} = foo;

// Object w/ Rest
var foo = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e'
};
var {a,b,...rest} = foo;

// Assigning to new variable names
var foo = {
  a: 'a',
  b: 'b'
};
var {a:aa,b:bb} = foo;

// Default values
var foo = {
  a: 'a',
  b: 'b',
  c: 'cool'
};
var {a:aa,b:bb, c='c'} = foo;


// Assigning to new variables names and providing default values
var foo = {
  a: 'a',
  c: 'cool'
};
var {a:aa='aaaa',b:bb='bbbb', c='c'} = foo;

// Nested object and array destructuring
var foo = {
  a: 'a',
  b: 'b',
  c: [1,2,3,4]
};
var {a,c:[c1,c2,c3]} = foo;
