const friends = [
  { fullname: 'Paul lee', address: 'Bangkok, Thailand' },
  { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
];

function getFullName(name, surname) {
  return `${name} ${surname}`;
}
//getFriendName is a higher order function

async function getFriendName(name, surname, callbackFn) {
  return new Promise((resolve, reject) => {
    const fullname = callbackFn(name, surname);
    if (fullname === undefined) reject(new Error('cannot get full name!'));
    resolve(fullname);
  });
}

async function getAddress(fullname) {
  return new Promise((resolve, reject) => {
    let myFriend = friends.find((friend) => friend.fullname.includes(fullname));
    if (myFriend === undefined) reject(new Error('your friend was not found'));
    resolve(myFriend.address);
  });
}

//getFullName is a callback function

//1. using promist.then() method
// getFriendName('Paul', 'lee', getFullName)
//   .then((myFriendName) => {
//     console.log(myFriendName);
//     return myFriendName;
//   })
//   .then((friendFullName) => {
//     console.log(friendFullName);
//     getAddress(friendFullName).then((friendAddr) => console.log(friendAddr));
//   })
//   .catch((err) => console.log(err));

//2. using async/await
async function main() {
  const myFriendName = await getFriendName('Paul', 'lee', getFullName);
  const myFriendAddr = await getAddress(myFriendName);
  console.log(myFriendAddr);
}
main();
