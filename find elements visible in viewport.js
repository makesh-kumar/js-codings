const findVisibleElements = () => {
  const visibleElements = [];
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((ele) => {
    const boundary = ele.getBoundingClientRect();
    if (isElementVisible(boundary)) {
      visibleElements.push(ele.innerHTML);
    }
  });
  console.log(visibleElements);
};

const isElementVisible = (ele) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  return (
    ele.top >= 0 &&
    ele.left >= 0 &&
    ele.bottom <= windowHeight &&
    ele.right <= windowWidth
  );
};

const debounce = (fn, delay) => {
  let intervalId;
  return () => {
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
      fn();
    }, delay);
  };
};

window.addEventListener('scroll', debounce(findVisibleElements, 1000));

/**
 *  .html
 *  <div class="wrapper">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
    <div class="box">9</div>
    <div class="box">10</div>
    <div class="box">11</div>
    <div class="box">12</div>
    <div class="box">13</div>
    <div class="box">14</div>
    <div class="box">15</div>
    <div class="box">16</div>
    <div class="box">17</div>
    <div class="box">18</div>
    <div class="box">19</div>
    <div class="box">20</div>
    </div>
 * 
 * 
 *   .css
 *    .wrapper {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .box {
        height: 150px;
        width: 150px;
        background-color: red;
        color: black;
        text-align: center;
    }
 * 
 * 
 * 
 */
