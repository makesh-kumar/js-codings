const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
];

console.log(aggregate(endorsements, 'user', 'skill'));

function aggregate(arr, type, basedOn) {
  const res = [];

  for (const obj of arr) {
    if (obj[type] && obj[basedOn]) {
      let objType = getObjOfType(obj[type]);
      if (objType && objType.length) {
        objType = objType[0];
        objType[basedOn].push(obj[basedOn]);
      } else {
        let objType = {};
        objType[type] = obj[type];
        objType[basedOn] = [obj[basedOn]];
        res.push(objType);
      }
    }
  }

  function getObjOfType(key) {
    return res.filter((obj) => obj[type] === key);
  }

  return res;
}
