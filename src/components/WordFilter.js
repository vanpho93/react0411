import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        const { filterStatus } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary"
                    disabled={filterStatus === 'SHOW_ALL'}
                >
                    Show All
                </button>
                <button
                    className="btn btn-success" 
                    style={{ margin: 3 }}
                    disabled={filterStatus === 'SHOW_MEMORIZED'}
                >
                    Show Memorized
                </button>
                <button
                    className="btn btn-warning" 
                    disabled={filterStatus === 'SHOW_FORGOT'}
                >
                    Show forgot
                </button>
                <br /><br />
            </div>
        );
    }
}
