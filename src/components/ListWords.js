import React, { Component } from 'react';

const Word = ({ spot }) => (
    <div>
        <h3>{spot.en}</h3>
        <p>{spot.vn}</p>
    </div>
);

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
            txtVn: ''
        }
        this.addWord = this.addWord.bind(this);
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

    render() {
        const { words } = this.state;
        return (
            <div style={{ margin: 10 }}>
                List Words Component
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
                { words.map(word => (
                    <div key={word.en}>
                        <h3 style={{ color: word.isMemorized ? 'green' : 'red' }}>{word.en}</h3>
                        <p>{word.vn}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.removeWord(word.en)}
                        >
                            remove
                        </button>
                        <button
                            className="btn btn-primary"
                        >
                            toggle
                        </button>
                    </div>
                )) }
            </div>
        );
    }
}

export default ListWords;
