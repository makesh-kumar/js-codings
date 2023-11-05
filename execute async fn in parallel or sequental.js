const getAsyncFn = () => {
  const randomTimerDelayInSec = Math.floor(Math.random() * 10) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomTimerDelayInSec < 5000) {
        reject('Error @ ' + randomTimerDelayInSec);
      } else {
        resolve('Success @ ' + randomTimerDelayInSec);
      }
    }, randomTimerDelayInSec);
  });
};

/**********   Parallel execution  ************************/
const executeAsyncInParallel = (asyncFns, callback) => {
  const successData = [];
  const errorData = [];
  let noOfTaskCompleted = 0;

  asyncFns.forEach((asyncFn) => {
    asyncFn
      .then((data) => {
        successData.push(data);
      })
      .catch((error) => {
        errorData.push(error);
      })
      .finally(() => {
        noOfTaskCompleted++;
        if (noOfTaskCompleted === asyncFns.length) {
          callback(successData, errorData);
        }
      });
  });
};

/****** Sequential execution ******/

const executeAsyncInSequential = async (asyncFns, callback) => {
  const successData = [];
  const errorData = [];
  for (let i = 0; i < asyncFns.length; i++) {
    const asyncFn = asyncFns[i];

    try {
      const data = await asyncFn;
      successData.push(data);
    } catch (error) {
      errorData.push(error);
    }
  }

  callback(successData, errorData);
};

let listOfAsyncTask = [
  getAsyncFn(),
  getAsyncFn(),
  getAsyncFn(),
  getAsyncFn(),
  getAsyncFn(),
  getAsyncFn(),
];

executeAsyncInParallel(listOfAsyncTask, (successData, errorData) => {
  console.log('Sucess - ', successData);
  console.log('Error - ', errorData);
});


// executeAsyncInSequential(listOfAsyncTask, (successData, errorData) => {
//     console.log('Sucess - ', successData);
//     console.log('Error - ', errorData);
//   });



