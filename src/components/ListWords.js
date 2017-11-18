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
        this.onAdd = this.onAdd.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.onRemoveWord = this.onRemoveWord.bind(this);
        this.onChangeFilterStatus = this.onChangeFilterStatus.bind(this);
    }

    onAdd(word) {
        this.setState({
            words: [word, ...this.state.words]
        });
    }

    onChangeFilterStatus(newStatus) {
        this.setState({ filterStatus: newStatus })
    }

    onRemoveWord(en) {
        const { words } = this.state;
        this.setState({
            words: words.filter(x => x.en !== en ) 
        })
    }

    toggleStatus(en) {
        const { words } = this.state;
        const newWords = this.state.words.map(word => {
            if (word.en !== en) return word;
            return { ...word, isMemorized: !word.isMemorized }
        });
        this.setState({ words: newWords });
    }

    getForm() {
        const { isShowForm } = this.state;
        if(isShowForm) return <WordForm onAdd={this.onAdd} />;
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
        const { words, filterStatus, isShowForm } = this.state;
        const wordsForShow = words.filter(word => {
            if(filterStatus === 'SHOW_ALL') return true;
            if(filterStatus === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
        return (
            <div style={{ margin: 10 }}>
                <WordFilter
                    filterStatus={filterStatus}
                    onChangeFilterStatus={this.onChangeFilterStatus}
                />
                <br /><br />
                { this.getForm() }
                { wordsForShow.map(word => <Word key={word.en} word={word} onRemoveWord={this.onRemoveWord} />) }
            </div>
        );
    }
}

export default ListWords;
