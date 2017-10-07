function getFromCache(url){
  return new Promise((resolve, reject)=>{
    if(sessionStorage[url]){
      resolve(JSON.parse(sessionStorage[url])); // read and parse from cache
    } else {
      reject('Not in cache');
    }
  });
}
async function getData(url) {
  let data;
  try {
    data = await getFromCache(url) // returns a promise
  } catch(e) {
    data = await fetch(url).then(res=>res.json()); // returns a promise
  }

  sessionStorage[url] = JSON.stringify(data); // set cache
  return Promise.resolve(data); // returns a promise
}

getData('./data.json')
  .then(data=>{
    console.log(data);
  });
