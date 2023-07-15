const aggregateValFromInput = (rootEle) => {
  // console.log(rootEle.children);
  const obj = {};

  Array.from(rootEle.children).forEach((e) => {
    console.log(e.getAttribute('name'));
    let props = e.getAttribute('name');
    props = props.split('.');
    let tempObj = obj;

    for (let i = 0; i < props.length - 1; i++) {
      const prop = props[i];
      if (tempObj[prop] === undefined) {
        tempObj[prop] = {};
      }
      tempObj = tempObj[prop];
    }
    tempObj[props[props.length - 1]] = e.value;
  });
  console.log(obj);
  return obj;
};

const root = document.querySelector("form[id='parent']");
aggregateValFromInput(root);

/*

   <form id="parent">
        <input type="text" value="makesh" name="foo.bat">
        <input type="text" value="kumar" name="foo.bar.baz">
        <input type="text" value="123" name="fizz">
    </form>

*/