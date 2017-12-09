import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    onClick={() => this.props.dispatch({ type: 'REMOVE_WORD', en: word.en })}
                >
                    remove
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.dispatch({ type: 'TOGGLE_IS_MEMORIZED', en: word.en })}
                >
                    toggle
                </button>
            </div>
        );
    }
}

export default connect()(Word);
