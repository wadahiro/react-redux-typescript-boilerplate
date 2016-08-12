interface ActionType<TAction> extends String { }

export interface Action {
    type: String;
    payload?: any;
}

export function isType<T extends Action>(action: Action, type: ActionType<T>): action is T {
    return action.type === type;
}

export const INCREMENT: ActionType<IncrementAction> = 'INCREMENT';
export const DECREMENT: ActionType<DecrementAction> = 'DECREMENT';
export const SET_COUNT: ActionType<SetCounterAction> = 'SET_COUNT';

export interface IncrementAction extends Action {
}
export function increment(): IncrementAction {
    return {
        type: INCREMENT
    };
}

export interface DecrementAction extends Action {
}
export function decrement(): DecrementAction {
    return {
        type: DECREMENT
    };
}

export interface SetCounterAction extends Action {
    payload: {
        count: number;
    }
}
export function setCount(num: number): SetCounterAction {
    return {
        type: SET_COUNT,
        payload: {
            count: num
        }
    };
}

