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
        // const value = this.state.value;
        // const isShowText = this.state.isShowText;
        const { value, isShowText } = this.state;
        const color = value % 2 === 0 ? 'green' : 'red';
        const display = isShowText ? 'block' : 'none';
        return (
            <div>
                <h3 style={{ color }}>{value}</h3>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ value: value + 1 })}
                >
                    Increase
                </button>
                { isShowText ? <h3>Khoa Pham Training</h3> : null }
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ isShowText: !isShowText })}
                >
                    { isShowText ? 'Hide' : 'Show' }
                </button>
            </div>
        );
    }
}

export default ConditionCom;
