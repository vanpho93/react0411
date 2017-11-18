import React, { Component } from 'react';

export default class MyBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(isAdd) {
        if (isAdd) return this.setState({ value: this.state.value + 1 });
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <h3>Value: {this.state.value}</h3>
                <MyBoxController onChangeValue={this.onChangeValue} />
            </div>
        );
    }
}

class MyBoxController extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.onChangeValue(true)}>Add</button>
                <button  onClick={() => this.props.onChangeValue(false)}>Sub</button>
            </div>
        );
    }
}
