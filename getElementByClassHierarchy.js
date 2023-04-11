const getElementByClassHierarchy = (root, selector) => {
  const getNodes = (root, className) => {
    let result = [];

    if (root.classList.contains(className)) {
      result.push(root);
      return result;
    }
    for (const node of Array.from(root.children)) {
      const res = getNodes(node, className);
      result = [...result, ...res];
    }
    return result;
  };

  const selectors = selector.split('>');
  let nodeToStart = root;
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    const nodes = getNodes(nodeToStart, selector);
    nodeToStart = nodes[0];
    if (i === selectors.length - 1) {
      return nodes;
    }
  }
};

const root = document.querySelector('.root');

console.log(getElementByClassHierarchy(root, 'a>b>c'));
