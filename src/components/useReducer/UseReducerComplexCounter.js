import { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
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
 * This example shows useReducer(complex state and action).
 * 
 * `useReducer` accepts two params:
 * @param reducer function
 * @param initialState assigned to { firstCounter: 0, secondCounter: 0 };
 * @example
 * const initialState = { firstCounter: 0, secondCounter: 0 };
 * const [count, dispatch] = useReducer(reducer, initialState);
 * 
 * `reducer` function makes the transition of states based on the action
 * `reducer` function accepts two params further:
 * @param state
 * @param action
 * @example
 * const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
 * @returns 
 */
export const UseReducerComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Incremen5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decremen5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div >
    )
}
