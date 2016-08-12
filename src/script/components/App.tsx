import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { RootState } from '../reducers';

interface Props {
    dispatch?: Dispatch<RootState>;
    count?: number;
}

interface State {
    count?: number;
}

class App extends React.Component<Props, void> {
    plus = () => {
        this.props.dispatch(Actions.increment());
    };

    minus = () => {
        this.props.dispatch(Actions.decrement());
    };

    setCount = (e) => {
        this.props.dispatch(Actions.setCount(Number(e.target.value)));
    };

    render() {
        return (
            <div>
                <input type='number' onChange={this.setCount} value={this.props.count} />

                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state: RootState, props: Props): Props {
    return {
        count: state.app.count
    };
}


const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;
