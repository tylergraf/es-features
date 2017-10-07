function getFromCache(url){
  return new Promise((resolve, reject)=>{
    if(sessionStorage[url]){
      resolve(JSON.parse(sessionStorage[url])); // read and parse from cache
    } else {
      reject('Not in cache');
    }
  });
}
function getData(url) {
  return getFromCache(url) // returns a promise
    .catch(e => {
      return fetch(url).then(res=>res.json()); // returns a promise
    })
    .then(v => {
      sessionStorage[url] = JSON.stringify(v); // set cache
      return Promise.resolve(v); // returns a promise
    });
}

getData('./data.json')
  .then(data=>{

  });
