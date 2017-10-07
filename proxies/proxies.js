const handler = {
  get: function(obj, prop) {
    if(prop in obj){
      return obj[prop];
    } else {
      return 37;
    }
  },
  set: function(obj, prop, value){
    if(prop === 'hi'){
      obj[prop] = 'Hello!';
    } else {
      obj[prop] = value;
    }
  }
};

const p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37

p.hi = 'hi';
console.log('hi', p.hi);
