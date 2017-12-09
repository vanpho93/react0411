const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send([
    { en: 'one', vn: 'mot', isMemorized: false },
    { en: 'two', vn: 'hai', isMemorized: false },
    { en: 'three', vn: 'ba', isMemorized: true },
]));

app.listen(4000, () => console.log('Server started!'));
