const handler = {
  get: function(obj, prop) {
    // return 37 if prop is undefined
  },
  set: function(obj, prop, value){
    // return hello if prop is hi
  }
};

const p = new Proxy({}, handler);
