import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';

class ListWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { en: 'one', vn: 'mot', isMemorized: true },
                { en: 'two', vn: 'hai', isMemorized: false },
                { en: 'three', vn: 'ba', isMemorized: true },
            ],
            filterStatus: 'SHOW_ALL',
            isShowForm: false
        }
    }

    getForm() {
        const { isShowForm } = this.state;
        if(isShowForm) return <WordForm />;
        return (
            <button
                className="btn btn-default"
                onClick={() => this.setState({ isShowForm: true })}
            >
                Show Form
            </button>
        );
    }

    render() {
        const { words, filterStatus } = this.state;
        const wordsForShow = words.filter(word => {
            if(filterStatus === 'SHOW_ALL') return true;
            if(filterStatus === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
        return (
            <div style={{ margin: 10 }}>
                <WordFilter filterStatus={filterStatus} />
                { this.getForm() }
                { wordsForShow.map(word => <Word key={word.en} word={word} />) }
            </div>
        );
    }
}

export default ListWords;
