import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreactors from '../redux/actionCreactors';

class WordFilter extends Component {
    changeStatus(filterStatus) {
        this.props.setFilterStatus(filterStatus);
    }
    render() {
        const { filterStatus } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary"
                    disabled={filterStatus === 'SHOW_ALL'}
                    onClick={() => this.changeStatus('SHOW_ALL')}
                >
                    Show All
                </button>
                <button
                    className="btn btn-success" 
                    style={{ margin: 3 }}
                    disabled={filterStatus === 'SHOW_MEMORIZED'}
                    onClick={() => this.changeStatus('SHOW_MEMORIZED')}
                >
                    Show Memorized
                </button>
                <button
                    className="btn btn-warning" 
                    disabled={filterStatus === 'SHOW_FORGOT'}
                    onClick={() => this.changeStatus('SHOW_FORGOT')}
                >
                    Show forgot
                </button>
                <br /><br />
            </div>
        );
    }
}

const mapState = state => ({ filterStatus: state.filterStatus });

export default connect(mapState, actionCreactors)(WordFilter);
