import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: '',
        };
        this.toggleForm = this.toggleForm.bind(this);
    }
    toggleForm() {
        this.props.dispatch({ type: 'TOGGLE_FORM' });
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
                        this.props.dispatch({ type: 'ADD_WORD', word });
                        this.toggleForm();
                    }}
                >
                    Add word
                </button>
                <button className="btn btn-warning" onClick={this.toggleForm}>
                    Cancel
                </button>
            </div>
        );
    }
}
export default connect()(WordForm);
