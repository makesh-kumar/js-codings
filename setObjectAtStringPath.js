const setObjAtGivenPat = (obj, path, val) => {
  if (typeof path === 'string') {
    path = path.replaceAll('[', '.');
    path = path.replaceAll(']', '');
    path = path.split('.');
  }

  for (let i = 0; i < path.length - 1; i++) {
    let currentPath = path[i];
    if (obj[currentPath] === undefined) {
      if (Number(path[i + 1]) >= 0) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }
    obj = obj[currentPath];
  }
  obj[path[path.length - 1]] = val;
};

const obj = {};

setObjAtGivenPat(obj, ['a', '0', 'b', 'c'], 22);
console.log(obj);
console.log(obj.a[0].b.c);
// a[0].a
// a.0.1
