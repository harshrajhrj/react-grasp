import { useState, useMemo } from 'react'

/**
 * `useMemo` for performance optimization.
 * ---
 * React is using cached value of isEven function to display whether counterOne is odd or even.
 * Since the value never changed for counterOne, there is no need to recompute for odd or even value.
 * React will simply use the cached value from the previous render.
 * @returns 
 */
export const UseMemoCounter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne]);

    // const isEven = () => {
    //     let i = 0
    //     while (i < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}
