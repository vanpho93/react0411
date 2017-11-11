import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
        this.onAdd = this.onAdd.bind(this);
        this.onSub = this.onSub.bind(this);
    }

    onAdd() {
        const { value } = this.state;
        this.setState({ value: value + 1 });
    }

    onSub() {
        const { value } = this.state;
        this.setState({ value: value - 1 });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{value}</h3>
                <button onClick={this.onAdd}>Tăng</button>
                <button onClick={this.onSub}>Giảm</button>
            </div>
        );
    }
}

export default Box;
