const cachedCall = (expiry) => {
  let result = {};
  return (url, options = {}) => {
    return new Promise((resolve, reject) => {
      if (result[url]) {
        console.log('Serving from CACHE')
        return resolve(result[url]);
      } else {
        fetch(url, options).then(
          (response) => {
            result[url] = response;
            console.log('Serving from HTTP');
            setTimeout(()=>{
                result[url] = null;
            },expiry)

            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  };
};


let url = 'https://jsonplaceholder.typicode.com/posts/1';


const call = cachedCall(3000);

call(url).then((data)=>{
    console.log("** -> ",data)
});

setTimeout(()=>{
    call(url).then((data)=>{
        console.log("** -> ",data)
    });
},1000)

setTimeout(()=>{
    call(url).then((data)=>{
        console.log("** -> ",data)
    });
},5000)
// fetch(url).then(r=>{
//     console.log(r)
// })