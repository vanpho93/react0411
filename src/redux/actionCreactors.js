import axios from 'axios';

export function removeWord(en) {
    return { type: 'REMOVE_WORD', en };
}

export function toggleIsMemorized(en) {
    return { type: 'TOGGLE_IS_MEMORIZED', en };
}

export function toggleIsShowForm() {
    return { type: 'TOGGLE_FORM' };
}

export function addWord(word) {
    return { type: 'ADD_WORD', word };
}

export function setFilterStatus(filterStatus) {
    return { type: 'SET_FILTER_STATUS', filterStatus };
}

export function setWords(words) {
    return { type: 'SET_WORDS', words };
}

export function getWords() {
    return dispatch => {
        axios.get('http://localhost:4000')
        .then(res => dispatch(setWords(res.data)))
        .catch(err => console.log(err));
    }
}
