const teo = { name: 'teo n', age: 10 };

const ti = { ...teo, height: 150, name: 'Ti' };

teo.age = 11;

console.log(ti);
