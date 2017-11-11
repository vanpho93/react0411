import React, { Component } from 'react';
//state
class ConditionCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            isShowText: true
        };
    }
    render() {
        const color = this.state.value % 2 === 0 ? 'green' : 'red';
        const display = this.state.isShowText ? 'block' : 'none';
        return (
            <div>
                <h3 style={{ color }}>{this.state.value}</h3>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ value: this.state.value + 1 })}
                >
                    Increase
                </button>
                <h3 style={{ display }}>Khoa Pham Training</h3>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ isShowText: !this.state.isShowText })}
                >
                    { this.state.isShowText ? 'Hide' : 'Show' }
                </button>
            </div>
        );
    }
}

export default ConditionCom;
