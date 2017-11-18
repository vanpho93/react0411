import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
        this.onAdd = this.onAdd.bind(this);
        this.onSub = this.onSub.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onAdd() {
        const { value } = this.state;
        this.setState({ value: value + 1 });
    }

    onSub() {
        const { value } = this.state;
        this.setState({ value: value - 1 });
    }

    onChangeValue(isAdd) {
        const { value } = this.state;
        if (isAdd) return this.setState({ value: value + 1 });
        this.setState({ value: value - 1 });
    }

    render() {
        const { value } = this.state;
        return (
            <div style={{ padding: 20 }}>
                <h3>{value}</h3>
                <button onClick={this.onAdd}>Tăng</button>
                <button onClick={this.onSub}>Giảm</button>
                <BoxController
                    onChangeValue={this.onChangeValue}
                />
            </div>
        );
    }
}

export default Box;

class BoxController extends Component {
    render() {
        return (
            <div>
                <h3>Box Controller</h3>
                <button
                    className="btn btn-success"
                    style={{ margin: 10 }}
                    onClick={() => this.props.onChangeValue(true)}
                >
                    Tăng
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => this.props.onChangeValue(false)}
                >
                    Giảm
                </button>
            </div>
        )
    }
}
