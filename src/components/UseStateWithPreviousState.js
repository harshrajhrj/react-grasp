import { useState } from 'react'

/**
 * To increment a state variable `count` by a value greater than 1, using loop isn't
 * a right option because the `setCount` function doesn't have access to the previous value.
 * The snippet in the first example is incorrect. The snippet in the second example is correct.
 * @example
 * const handleCount = () => {
        for (var i = 0; i < 5; i++)
            setCount(count + 1)
    }
    ------------------
    <button onClick={handleCount}>Increment 5</button>
 * @example
 * const handleCount = () => {
        setCount(prev => prev + 5);
    }
    ------------------
    <button onClick={handleCount}>Increment 5</button>
 * @returns 
 */
export const UseStateWithPreviousState = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const handleCount = () => {
        setCount(prev => prev + 5);
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={handleCount}>Increment 5</button>
        </div>
    )
}
