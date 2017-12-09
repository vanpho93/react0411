import { createStore } from 'redux';

const defaultState = {
    words: [
        { en: 'one', vn: 'mot', isMemorized: false },
        { en: 'two', vn: 'hai', isMemorized: false },
        { en: 'three', vn: 'ba', isMemorized: true },
    ],
    isShowForm: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'REMOVE_WORD') return {
        ...state,
        words: state.words.filter(word => word.en !== action.en)
    }
    if (action.type === 'TOGGLE_IS_MEMORIZED') return {
        ...state,
        words: state.words.map(word => {
            if (word.en !== action.en) return word;
            return { ...word, isMemorized: !word.isMemorized };
        })
    }
    if (action.type === 'ADD_WORD') return { ...state, words: [action.word, ...state.words] }
    if (action.type === 'TOGGLE_FORM') return { ...state, isShowForm: !state.isShowForm }
    return state;
};

const store = createStore(reducer);

export default store;
