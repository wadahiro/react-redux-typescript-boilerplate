import { Action } from 'redux'

export type Actions = IncrementAction | DecrementAction | SetCounterAction;

export const INCREMENT: 'INCREMENT' = 'INCREMENT';
export const DECREMENT: 'DECREMENT' = 'DECREMENT';
export const SET_COUNT: 'SET_COUNT' = 'SET_COUNT';

export interface IncrementAction extends Action {
    type: typeof INCREMENT;
}
export function increment(): IncrementAction {
    return {
        type: INCREMENT
    };
}

export interface DecrementAction extends Action {
    type: typeof DECREMENT;
}
export function decrement(): DecrementAction {
    return {
        type: DECREMENT
    };
}

export interface SetCounterAction extends Action {
    type: typeof SET_COUNT;
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

