const obj = {
  a: ['b', 'c'],
  b: ['d', 'g'],
  d: ['p', 'q'],
  l: ['x', 'y'],
};

// const findMutalFriends = (mapping, person) => {
//   const friendsList = mapping[person];
//   if (friendsList && friendsList.length > 0) {
//     const finalList = [...friendsList];
//     for (let friend of friendsList) {
//       const mutualFriendsList = findMutalFriends(mapping, friend);
//       finalList.push(...mutualFriendsList);
//     }
//     return finalList;
//   }
//   return [];
// };


// Not a good approach, but still it works
function findMutalFriends(mapping, person) {
  const friendsList = mapping[person];
  if (friendsList && friendsList.length) {
    for (const key in mapping) {
      if (friendsList.includes(key)) {
        friendsList.push(...mapping[key]);
      }
    }
  }
  return friendsList;
}

console.log(findMutalFriends(obj, 'j'));
