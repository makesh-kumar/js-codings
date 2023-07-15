// fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// setTimeout(() => {
//   abortController.abort();
// }, 10000);

const fetchWithTimeout = (url, delay) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const timer = setTimeout(() => {
    abortController.abort();
  }, delay);
  return new Promise((resolve, reject) => {
    fetch(url, { signal })
      .then((resp) => {
        clearTimeout(timer);
        resolve(resp);
      })
      .catch(reject);
  });
};

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 10)
  .then((response) => response.json())
  .then((json) => console.log(json));
