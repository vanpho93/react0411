import React, { Component } from 'react';

// const Word = (props) => (
    //     <div>
    //         <h3 style={{ color: props.color }}>{props.en}</h3>
    //         <p>{props.vn}</p>
    //     </div>
    // );
// export default Word;
export default class Word extends Component {
    render() {
        return (
            <div>
                <h3 style={{ color: this.props.color }}>{this.props.en}</h3>
                <p>{this.props.vn}</p>
            </div>
        );
    }
}
