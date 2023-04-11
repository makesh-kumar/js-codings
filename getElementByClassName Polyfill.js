const getElementByClassName = (root, className) => {
  const result = [];

  const searchClass = (node, className) => {
    if (node.classList.contains(className)) {
      result.push(node);
    }
    const childNodes = Array.from(node.children);
    for (const child of childNodes) {
      searchClass(child, className);
    }
  };

  searchClass(root, className);

  return result;
};

const root = document.querySelector('.root');

console.log(getElementByClassName(root, 'target'));
