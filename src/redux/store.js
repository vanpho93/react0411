import { createStore, combineReducers } from 'redux';

const defaultState = {
    words: [
        { en: 'one', vn: 'mot', isMemorized: false },
        { en: 'two', vn: 'hai', isMemorized: false },
        { en: 'three', vn: 'ba', isMemorized: true },
    ],
    isShowForm: false,
    filterStatus: 'SHOW_ALL' // SHOW_FORGOT, SHOW_MEMORIZED
};

const wordsReducer = (state = defaultState.words, action) => {
    if (action.type === 'REMOVE_WORD') return state.filter(word => word.en !== action.en);
    if (action.type === 'TOGGLE_IS_MEMORIZED') return state.map(word => {
            if (word.en !== action.en) return word;
            return { ...word, isMemorized: !word.isMemorized };
    });
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    return state;
}

const isShowFormReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}

const filterStatusReducer = (state = 'SHOW_ALL', action) => {
    if (action.type === 'SET_FILTER_STATUS') return action.filterStatus;
    return state;
}

/*
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
    if (action.type === 'SET_FILTER_STATUS') return { ...state, filterStatus: action.filterStatus }
    return state;
};
*/

const reducer = combineReducers({
    words: wordsReducer,
    isShowForm: isShowFormReducer,
    filterStatus: filterStatusReducer
});

const store = createStore(reducer);

export default store;
