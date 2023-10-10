import { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

/**
 * For dealing with multiple state variables with same state transitions, using multiple
 * `useReducers()` is the best idea rather than duplicating code for state transitions like
 * in `UseReducerComplexCounter.js`
 * ---
 * `useReducer` accepts two params:
 * @param reducer function
 * @param initialState assigned to `0`
 * @example
 * const initialState = 0;
 * const [count, dispatch] = useReducer(reducer, initialState);
 * const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
 * 
 * `reducer` function makes the transition of states based on the action
 * `reducer` function accepts two params further:
 * @param state
 * @param action
 * @example
 * const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
 * @returns 
 */
export const MultipleUseReducers = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
            <div>Count Two - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}
