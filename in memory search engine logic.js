function InMemorySearch() {
  const data = {};

  this.addDocument = (namespace, ...documents) => {
    if (!data[namespace]) {
      data[namespace] = [...documents];
    } else {
      data[namespace].push(...documents);
    }
  };

  this.search = (namespace, filterFn, sort) => {
    if (!data[namespace]) {
      return [];
    }
    const docs = data[namespace];
    const filteredDocs = docs.filter(filterFn);

    const sortFn = (a, b) => {
      const key = sort.key;
      if (sort.asc) {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    };
    filteredDocs.sort(sortFn);

    return filteredDocs;
  };
}

const engine = new InMemorySearch();

engine.addDocument(
  'makesh',
  { name: 'm', age: 12 },
  { name: 'f', age: 4 },
  { name: 'g', age: 16 },
  { name: 'j', age: 5 }
);

engine.addDocument(
  'kumar',
  { name: 'm', age: 67 },
  { name: 'm', age: 43 },
  { name: 'm', age: 26 },
  { name: 'm', age: 59 }
);

engine.addDocument('makesh', { name: 'h', age: 8 });

const result = engine.search('kumar', (a) => a.age > 6, {
  key: 'age',
  asc: false,
});

console.log(result);
// let arr = [2, 3, 4, 1, 6];

// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);
