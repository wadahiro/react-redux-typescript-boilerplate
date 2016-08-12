import { combineReducers } from 'redux';

import * as Actions from '../actions';

export interface RootState {
    app: AppState;
}

export interface AppState {
    count: number;
}

function init(): AppState {
    return {
        count: 0
    };
}

export const appStateReducer = (state: AppState = init(), action: Actions.Actions) => {
    switch (action.type) {

        case Actions.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });

        case Actions.DECREMENT:
            return Object.assign({}, state, {
                count: state.count + -1
            });

        case Actions.SET_COUNT:
            return Object.assign({}, state, {
                count: action.payload.count
            });

        // default: const _exhaustiveCheck: never = action;
    }

    return state;
};

export default combineReducers({
    app: appStateReducer
});


