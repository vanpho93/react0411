import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';
import { connect } from 'react-redux';

class ListWords extends Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }
    toggleForm() {
        this.props.dispatch({ type: 'TOGGLE_FORM' });
    }
    render() {
        const { words, isShowForm, filterStatus } = this.props;
        const filteredWords = words.filter(word => {
            if (filterStatus === 'SHOW_ALL') return true;
            if (filterStatus === 'SHOW_MEMORIZED') return word.isMemorized;
            return !word.isMemorized;
        });
        return (
            <div style={{ margin: 10 }}>
                <WordFilter />
                { isShowForm ? <WordForm /> : (
                    <button className="btn btn-default" onClick={this.toggleForm}>
                        Show Form
                    </button>
                )}
                { filteredWords.map(word => <Word key={word.en} word={word} />) }
            </div>
        );
    }
}

const mapState = state => ({ words: state.words, isShowForm: state.isShowForm, filterStatus: state.filterStatus });

export default connect(mapState)(ListWords);


/*
1. Cai dat redux react-redux
2. Tao thu muc redux, tao file store.js, import createStore
3. Tao defaultState, reducer function 'return state'
4. Dung Provider va connect
5. connect ListWords component voi store
*/