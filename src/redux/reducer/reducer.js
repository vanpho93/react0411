import { combineReducers } from 'redux';
import { isShowFormReducer } from './isShowFormReducer';
import { wordsReducer } from './wordsReducer';
import { filterStatusReducer } from './filterStatusReducer';

export const reducer = combineReducers({
    words: wordsReducer,
    isShowForm: isShowFormReducer,
    filterStatus: filterStatusReducer
});
