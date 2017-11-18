import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';

class ListWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { en: 'one', vn: 'mot', isMemorized: true },
                { en: 'two', vn: 'hai', isMemorized: false },
                { en: 'three', vn: 'ba', isMemorized: true },
            ],
            filterStatus: 'SHOW_ALL' // 'SHOW_MEMORIZED' 'SHOW_FORGET'
        }
        this.onAdd = this.onAdd.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.onRemoveWord = this.onRemoveWord.bind(this);
    }

    onAdd(word) {
        this.setState({
            words: this.state.words.concat(word),
        });
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
    render() {
        const { words, filterStatus } = this.state;
        const wordsForShow = words.filter(word => {
            if(filterStatus === 'SHOW_ALL') return true;
            if(filterStatus === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });

        return (
            <div style={{ margin: 10 }}>
                <select className="form-control" onChange={event => this.setState({ filterStatus: event.target.value })}>
                    <option value="SHOW_ALL">SHOW ALL</option>
                    <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                    <option value="SHOW_FORGOT">SHOW FORGOT</option>
                </select>
                <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ filterStatus: 'SHOW_ALL' })}
                    disabled={filterStatus === 'SHOW_ALL'}
                >
                    Show All
                </button>
                <button
                    className="btn btn-success" 
                    onClick={() => this.setState({ filterStatus: 'SHOW_MEMORIZED' })}
                    style={{ margin: 3 }}
                    disabled={filterStatus === 'SHOW_MEMORIZED'}
                >
                    Show Memorized
                </button>
                <button
                    className="btn btn-warning" 
                    onClick={() => this.setState({ filterStatus: 'SHOW_FORGOT' })}
                    disabled={filterStatus === 'SHOW_FORGOT'}
                >
                    Show forgot
                </button>
                <br /><br />
                <WordForm onAdd={this.onAdd} />
                { wordsForShow.map(word => <Word key={word.en} word={word} onRemoveWord={this.onRemoveWord} />) }
            </div>
        );
    }
}

export default ListWords;
