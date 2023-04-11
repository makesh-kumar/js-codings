const incrementer = (val = 0, step = 1) => {
  let timerId = null;

  const start = () => {
    if (timerId === null) { // to avoid multiple start() call
      timerId = setInterval(() => {
        val = val + step;
        console.log(val);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    timerId = null;
  };

  return {
    start,
    pause,
  };
};

let inc = incrementer(1, 10);

// inc.start()
// setTimeout(()=>{
//     inc.pause();
// },5000)
// setTimeout(()=>{
//     inc.start();
// },7000)
