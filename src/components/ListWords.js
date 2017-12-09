import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';
import { connect } from 'react-redux';

class ListWords extends Component {
    render() {
        const { words } = this.props;
        return (
            <div style={{ margin: 10 }}>
                <WordForm />
                { words.map(word => <Word key={word.en} word={word} />) }
            </div>
        );
    }
}

const mapState = state => ({ words: state.words });

export default connect(mapState)(ListWords);


/*
1. Cai dat redux react-redux
2. Tao thu muc redux, tao file store.js, import createStore
3. Tao defaultState, reducer function 'return state'
4. Dung Provider va connect
5. connect ListWords component voi store
*/