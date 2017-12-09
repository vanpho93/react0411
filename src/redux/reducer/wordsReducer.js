// const defaultWords = [
//     { en: 'one', vn: 'mot', isMemorized: false },
//     { en: 'two', vn: 'hai', isMemorized: false },
//     { en: 'three', vn: 'ba', isMemorized: true },
// ];

export const wordsReducer = (state = [], action) => {
    if (action.type === 'REMOVE_WORD') return state.filter(word => word.en !== action.en);
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'TOGGLE_IS_MEMORIZED') return state.map(word => {
        if (word.en !== action.en) return word;
        return { ...word, isMemorized: !word.isMemorized };
    });
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    return state;
}
