const RADIUS = 50;
const defaultColor = 'red';

const cordList = [];

const root = document.querySelector('.root');

const getCords = (e) => {
  const { clientX, clientY } = e;

  const circleCord = {
    top: clientY - RADIUS,
    bottom: clientY + RADIUS,
    left: clientX - RADIUS,
    right: clientX + RADIUS,
    backgroundColor: defaultColor,
    position: 'absolute',
    borderRadius: '50%',
    height: RADIUS * 2 + 'px',
    width: RADIUS * 2 + 'px',
  };

  for (const cords of cordList) {
    if (isCirclesOverlapping(circleCord, cords)) {
      circleCord.backgroundColor = getRandomColorCode();
    }
  }
  cordList.push(circleCord);

  generateCircles(circleCord);
};

const isCirclesOverlapping = (c1, c2) => {
  const isOverlapping = !(
    c1.top > c2.bottom ||
    c1.bottom < c2.top ||
    c1.right < c2.left ||
    c1.left > c2.right
  );

  return isOverlapping;
};

const generateCircles = (cords) => {
  const div = document.createElement('div');
  div.style.height = cords.height;
  div.style.width = cords.width;
  div.style.position = cords.position;
  div.style.borderRadius = cords.borderRadius;

  div.style.top = cords.top;
  div.style.right = cords.right;
  div.style.bottom = cords.bottom;
  div.style.left = cords.left;

  div.style.backgroundColor = cords.backgroundColor;
  root.appendChild(div);
};

function getRandomColorCode() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');
  return '#' + rHex + gHex + bHex;
}

document.addEventListener('click', getCords);


/**
 * .html
 * 
 * <div class="root"></div>
 * 
 */