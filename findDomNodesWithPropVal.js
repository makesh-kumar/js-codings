const body = document.querySelector('body');

function getComputedColor(colorProperty) {
  const ele = document.createElement('div');
  ele.style.color = colorProperty;
  document.body.appendChild(ele);
  const computed = window.getComputedStyle(ele); // to get all colors in rgb format
  const { color } = computed;
  document.body.removeChild(ele);
  return color;
}

// only for given color
function findDomNodesWithColor(root, color) {
  const expectedcolor = getComputedColor(color);
  const output = [];
  function searchNode(node) {
    const nodeColor = node.style.color;
    const computedColor = getComputedColor(nodeColor);
    if (computedColor === expectedcolor) {
      output.push(node);
    }
    for (const childNode of node.children) {
      searchNode(childNode);
    }
  }

  searchNode(root);

  return output;
}

// console.log(findDomNodesWithColor(body, 'red'));


// for given attribute with given val
function findAllNodesPropWithVal(attributeName, value) {
  const output = [];

  function searchNode(node) {
    const attrValue = node.getAttribute(attributeName);
    if (attrValue && attrValue == value) {
      output.push(node);
    }

    for (const child of node.children) {
      searchNode(child);
    }
  }

  searchNode(body, attributeName, value);

  return output
}

console.log(findAllNodesPropWithVal('id', 'makesh'));