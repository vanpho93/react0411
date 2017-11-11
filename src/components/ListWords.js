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
                { en: 'one', vn: 'mot' },
                { en: 'two', vn: 'hai' },
                { en: 'three', vn: 'ba' },
            ]
        }
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
                { words.map(word => (
                    <div key={word.en}>
                        <h3>{word.en}</h3>
                        <p>{word.vn}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.removeWord(word.en)}
                        >
                            remove
                        </button>
                    </div>
                )) }
            </div>
        );
    }
}

export default ListWords;
