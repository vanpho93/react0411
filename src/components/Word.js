import React, { Component } from 'react';
import { connect } from 'react-redux';

function removeWord(en) {
    return { type: 'REMOVE_WORD', en }
}

function toggleIsMemorized(en) {
    return { type: 'TOGGLE_IS_MEMORIZED', en }
}

class Word extends Component {
    render() {
        const { word } = this.props;
        return (
            <div>
                <h3 style={{ color: word.isMemorized ? 'green' : 'red' }}>{word.en}</h3>
                <p>{word.vn}</p>
                <button
                    className="btn btn-danger"
                    style={{ margin: 3 }}
                    onClick={() => this.props.removeWord(word.en)}
                >
                    remove
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.toggleIsMemorized(word.en)}
                >
                    toggle
                </button>
            </div>
        );
    }
}

export default connect(null, { removeWord, toggleIsMemorized })(Word);
