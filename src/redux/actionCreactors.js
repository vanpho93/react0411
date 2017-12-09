export function removeWord(en) {
    return { type: 'REMOVE_WORD', en };
}

export function toggleIsMemorized(en) {
    return { type: 'TOGGLE_IS_MEMORIZED', en };
}

export function toggleIsShowForm() {
    return { type: 'TOGGLE_FORM' };
}
