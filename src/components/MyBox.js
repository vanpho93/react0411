import React, { Component } from 'react';

export default class MyBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }
    render() {
        return (
            <div>
                <h3>Value: {this.state.value}</h3>
                <MyBoxController />
            </div>
        );
    }
}

class MyBoxController extends Component {
    render() {
        return (
            <div>
                <button>Add</button>
                <button>Sub</button>
            </div>
        );
    }
}
