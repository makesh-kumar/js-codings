// function asy(val) {
//   console.log(val);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('ID -  ' + val);
//     }, 3000);
//   });
// }

// async function foo(arr) {
//   let d = arr.reduce((prev, curr) => {
//     return prev.then((val) => {
//       return new Promise((resolve, reject) => {
//         asy(curr).then((d) => {
//           resolve([...val, d]);
//         });
//       });
//     });
//   }, Promise.resolve([]));

//   d.then((d) => {
//     console.log(d);
//   });

//   //     let res = []
//   //   for (let i = 0; i < arr.length; i++) {
//   //        let d = await asy(arr[i])
//   //        res.push(d)
//   //   }

//   //   console.log(res)
// }

// foo([1, 2, 3, 4]);

const chop = (arr, limit) => {
  const res = [];
  for (let i = 0; i < arr.length; i = i + limit) {
    res.push(arr.slice(i, i + limit));
  }
  return res;
};
const getNameById = (id, cb) => {
  const timer = Math.floor(Math.random() * 100) + 200;
  setTimeout(() => {
    cb('ID - ' + id);
  }, timer);
};

const mapLimit = async (inputArr, limit, iterFn, cb) => {
  const choppedArr = chop(inputArr, limit);
  //   console.log(choppedArr);

  /***** Using array reduce *******/

  //   let res = choppedArr.reduce((prev, curr) => {
  //     return prev.then((prevData) => {
  //       return new Promise((res, rej) => {
  //         let temp = [];
  //         curr.forEach((val) => {
  //           iterFn(val, (result) => {
  //             temp.push(result);
  //             if (temp.length === curr.length) {
  //               res([...prevData, ...temp]);
  //             }
  //           });
  //         });
  //       });
  //     });
  //   }, Promise.resolve([]));
  //    res.then(cb);



  /***** Using await *******/
  let finalRes = [];
  for (let i = 0; i < choppedArr.length; i++) {
    let arr = choppedArr[i];
    await new Promise((res, rej) => {
      let temp = [];
      for (let j = 0; j < arr.length; j++) {
        iterFn(arr[j], (data) => {
          temp.push(data);
          if (arr.length === temp.length) {
            finalRes.push(...temp);
            res();
          }
        });
      }
    });
  }

  console.log(finalRes);
};

mapLimit([1, 2, 3, 4], 2, getNameById, console.log);
