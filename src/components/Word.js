import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const { word } = this.props;
        return (
            <div>
                <h3 style={{ color: word.isMemorized ? 'green' : 'red' }}>{word.en}</h3>
                <p>{word.vn}</p>
                <button
                    className="btn btn-danger"
                    style={{ margin: 3 }}
                >
                    remove
                </button>
                <button
                    className="btn btn-primary"
                >
                    toggle
                </button>
            </div>
        );
    }
}
