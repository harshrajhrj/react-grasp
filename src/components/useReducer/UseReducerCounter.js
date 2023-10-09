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
 * The following snippet uses `useReducer` hook to maintain the state of `count` variable with
 * the help of `dispatch` method. We pass an action into dispatch method that is invoked inside
 * the component, based on the action we can see the state transitions.
 * Digging into workflow, `useReducer` returns [`state`, `dispatch`] where
 * `dispatch` method helps to change the value of `state`.
 * ---
 * `useReducer` accepts two params:
 * @param reducer function
 * @param initialState assigned to `0`
 * @example
 * const initialState = 0;
 * const [count, dispatch] = useReducer(reducer, initialState);
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
export const UseReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            
        </div>
    )
}
