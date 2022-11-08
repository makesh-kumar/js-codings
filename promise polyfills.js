const prom1 = Promise.reject("err1");
const prom2 = new Promise((res) => {
  setTimeout(() => {
    res("success1");
  }, 2000);
});
const prom3 = Promise.resolve("sucess2");
const prom4 = Promise.resolve("sucess3");
const prom5 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("EERR");
  }, 2000);
});

function promiseAll(promises) {
  let noOfPromiseCompleted = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (response) => {
          noOfPromiseCompleted++;
          result[i] = response;
          if (noOfPromiseCompleted === promises.length) {
            resolve(result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

function promiseAny(promises) {
  let noOfPromiseCompleted = 0;
  const errors = [];
  return new Promise((resolve, reject) => {
    for (const prom of promises) {
      prom.then(
        (response) => {
          resolve(response);
        },
        (error) => {
          errors.push(error);
          noOfPromiseCompleted++;
          if (noOfPromiseCompleted === promises.length) reject(errors);
        }
      );
    }
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const prom of promises) {
      prom.then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

function promiseAllSettled(promises) {
  const result = [];
  let noOfPromiseCompleted = 0;
  return new Promise((resolve) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (response) => {
          noOfPromiseCompleted++;
          result[i] = {
            status: "fulfilled",
            value: response,
          };
          if (noOfPromiseCompleted === promises.length) {
            resolve(result);
          }
        },
        (error) => {
          noOfPromiseCompleted++;
          result[i] = {
            status: "rejected",
            reason: error,
          };
          if (noOfPromiseCompleted === promises.length) {
            resolve(result);
          }
        }
      );
    }
  });
}

//   let res = promiseAll([prom3,prom2,prom2,prom3,prom3]).then(d=>{
//       console.log("DATA - ",d)
//   }).catch((err)=>{
//       console.log('ERR')
//   })

let res = promiseAny([prom3, prom4, prom1, prom3])
  .then(console.log)
  .catch(console.log);

promiseRace([prom1, prom5, prom2, prom2]).then(console.log).catch(console.log);

promiseAllSettled([prom1, prom5, prom3, prom2])
  .then(console.log)
  .catch(console.log);
