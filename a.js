const teo = { name: 'teo n', age: 10 };

const ti = { ...teo, height: 150, name: 'Ti' };

teo.age = 11;

console.log(ti);

const arr = [1, 4, 5, 6, 2, 1];

// const arr2 = arr;
const arr2 = [300, ...arr, 200];

arr.push(100);

console.log(arr2);
