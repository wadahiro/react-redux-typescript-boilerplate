import * as React from 'react';

interface Props {
}

interface State {
    count?: number;
}

export default class App extends React.Component<Props, State> {
    state = {
        count: 0
    };

    plus = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return <div>Count: {this.state.count} <button onClick={this.plus}>+</button></div>
    }
}
