import React, { Component } from 'react';

export default class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: '',
        };
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
                <button className="btn btn-success">
                    Add word
                </button>
                <button className="btn btn-warning">
                    Cancel
                </button>
            </div>
        );
    }
}
