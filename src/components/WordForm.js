import React, { Component } from 'react';

export default class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: '',
        };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        this.props.onAdd({
            en: this.state.txtEn,
            vn: this.state.txtVn,
            isMemorized: false
        });
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        return (
            <div>
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
                <button
                    className="btn btn-success"
                    onClick={this.addWord}
                >
                    Add word
                </button>
            </div>
        );
    }
}
