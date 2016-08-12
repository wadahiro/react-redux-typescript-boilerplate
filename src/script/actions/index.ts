import { Action } from 'redux';

export type Actions = IncrementAction | DecrementAction | SetCounterAction;

export interface IncrementAction extends Action {
    type: 'INCREMENT';
}
export function increment(): IncrementAction {
    return {
        type: 'INCREMENT'
    };
}

export interface DecrementAction extends Action {
    type: 'DECREMENT';
}
export function decrement(): DecrementAction {
    return {
        type: 'DECREMENT'
    };
}

export interface SetCounterAction extends Action {
    type: 'SET_COUNT';
    payload: {
        count: number;
    }
}
export function setCount(num: number): SetCounterAction {
    return {
        type: 'SET_COUNT',
        payload: {
            count: num
        }
    };
}

