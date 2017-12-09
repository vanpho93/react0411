import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreactors from '../redux/actionCreactors';

class WordForm extends Component {
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
                <button className="btn btn-success"
                    onClick={() => {
                        const { txtEn, txtVn } = this.state;
                        const word = { en: txtEn, vn: txtVn, isMemorized: false };
                        this.props.addWord(word);
                        this.props.toggleIsShowForm();
                    }}
                >
                    Add word
                </button>
                <button className="btn btn-warning" onClick={this.props.toggleIsShowForm}>
                    Cancel
                </button>
            </div>
        );
    }
}
export default connect(null, actionCreactors)(WordForm);
