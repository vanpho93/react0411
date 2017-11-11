import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <div style={{ padding: 10 }} className="form-group">
                <input className="form-control" placeholder="Email" />
                <br />
                <button className="form-control btn btn-success">Show</button>
            </div>
        );
    }
}

export default TextInput;
