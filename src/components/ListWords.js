import React, { Component } from 'react';
import Word from './Word';

class ListWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { en: 'one', vn: 'mot', isMemorized: true },
                { en: 'two', vn: 'hai', isMemorized: false },
                { en: 'three', vn: 'ba', isMemorized: true },
            ],
            txtEn: '',
            txtVn: '',
            filterStatus: 'SHOW_ALL' // 'SHOW_MEMORIZED' 'SHOW_FORGET'
        }
        this.addWord = this.addWord.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    addWord() {
        const { txtEn, txtVn, words } = this.state;
        this.setState({
            words: words.concat({ en: txtEn, vn: txtVn }),
            txtEn: '',
            txtVn: ''
        });
    }

    removeWord(en) {
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
                <input
                    className="form-control"
                    placeholder="English"
                    value={this.state.txtEn}
                    onChange={event => this.setState({ txtEn: event.target.value })}
                />
                <br />
                <input
                    className="form-control"
                    placeholder="Vietnamese"
                    value={this.state.txtVn}
                    onChange={event => this.setState({ txtVn: event.target.value })}
                />
                <br />
                <button className="btn btn-success" onClick={this.addWord}>Add word</button>
                { wordsForShow.map(word => <Word key={word.en} word={word} />) }
            </div>
        );
    }
}

export default ListWords;
