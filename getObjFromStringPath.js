function get(obj, path) {
// [1][1]
  path = path.replaceAll('[', '.'); // .1].1]
  path = path.replaceAll(']', ''); // .1.1
  path = path.split('.'); // [''.'1','1']
  path = path.filter(Boolean); // ['1','1']

  let currentObj = obj;

  for(const key of path) {
    if(currentObj[key] === undefined) {
        return undefined;
    }
    currentObj = currentObj[key];
  }
  return currentObj;

}

console.log(get({ developer: "Software Engineer" }, "developer"));
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"));
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]"));