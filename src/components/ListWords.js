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
    render() {
        return (
            <div>
                List Words Component
                { this.state.words.map(word => <Word key={word.en} spot={word} />) }
            </div>
        );
    }
}

export default ListWords;
