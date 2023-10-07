import { useState, useEffect } from 'react'

/**
 * In `useEffect` when we mention [ ] as second parameter, the hook considers the function to be run only once
 * and doesn't look for any changes further. In our case `interval` is created and destroyed after inital execution.
 * So, we mention `count` in [ ] as second parameter if `count` changes.
 * 
 * OR
 * 
 * Simply use previous state of `count` to update it every second. Then, you don't need to mention anything in [ ] parameter
 * of `useEffect` hook.
 * @returns 
 */
export const UseEffectInterval = () => {
    const [count, setcount] = useState(0);

    const tick = () => {
        setcount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        /**
         * Prints initial value
         */
        function doSomething() {
            console.log(count);
        }
        doSomething()

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>{count}</div>
    )
}
