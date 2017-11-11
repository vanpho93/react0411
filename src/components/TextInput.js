import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEmail: '' }
        this.onShow = this.onShow.bind(this);
    }
    onShow() {
        alert(this.state.txtEmail);
        this.setState({ txtEmail: '' });
    }
    render() {
        return (
            <div style={{ padding: 10 }} className="form-group">
                <input
                    className="form-control"
                    placeholder="Email"
                    value={this.state.txtEmail}
                    onChange={event => this.setState({ txtEmail: event.target.value })}
                />
                <br />
                <button className="form-control btn btn-success" onClick={this.onShow}>
                    Show
                </button>
            </div>
        );
    }
}

export default TextInput;
