import { useState, useEffect } from 'react'

/**
 * The snippet works as updating the document title after every render of the component.
 * This is achieved using `useEffect` hook that comes into action after every render of the
 * component.
 * @returns 
 */
export const UseEffectUpdateTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}
