import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer/reducer';

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

const store = createStore(reducer);

export default store;
