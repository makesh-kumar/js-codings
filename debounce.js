
const debounce = (fn, delay) => {
    let timeOutId;
    return (...args) => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

const searchEle = document.querySelector('#search');

const search = (e) => {
  console.log(this);
};
searchEle.addEventListener('input', debounce(search,1000));


// searchEle.addEventListener('input', search);



const parent = document.querySelector('.parent');
const makesh = document.querySelector('.makesh');
const news = document.querySelector('.new');
news.addEventListener('click',(e)=>{
    console.log('news')
    console.log(e.target)
    console.log(e.currentTarget)

})
parent.addEventListener('click',(e) => {
    console.log('parent')
    console.log(e.target)
    console.log(e.currentTarget)

})