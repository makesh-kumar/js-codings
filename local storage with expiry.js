const mySetItem = localStorage.setItem;
const myGetItem = localStorage.getItem;

localStorage.setItem = function (key, value, expiry) {
  const str = JSON.stringify({ value, expiry: Date.now() + expiry });
  mySetItem.call(this, key, str);
  //   setTimeout(() => {
  //     localStorage.removeItem(key);
  //   }, expiry);
};

localStorage.getItem = function (key) {
  let obj = myGetItem.call(this, key);
  if (obj) {
    obj = JSON.parse(obj);
    if (Date.now() < obj.expiry) {
      return obj.value;
    }
  }
  return null;
};

localStorage.setItem('name', 'makesh', 500);

console.log(localStorage.getItem('name'));

console.log(localStorage.getItem('name'));

setTimeout(() => {
  console.log(localStorage.getItem('name'));
}, 1000);
