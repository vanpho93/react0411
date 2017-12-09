import { createStore } from 'redux';

const defaultState = {
    words: [
        { en: 'one', vn: 'mot', isMemorized: false },
        { en: 'two', vn: 'hai', isMemorized: false },
        { en: 'three', vn: 'ba', isMemorized: true },
    ]
};

const reducer = (state = defaultState, action) => state;

const store = createStore(reducer);

export default store;
