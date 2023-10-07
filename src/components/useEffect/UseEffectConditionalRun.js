import { useState, useEffect } from 'react'

/**
 * If `useEffect` is used in a component where input change happens, then
 * `useEffect` will also execute as there is a change in the component. This is
 * unnecessary and we want `useEffect` to execute only when the `count` is changing.
 * So, we place the `count` variable as a second param in an array. The array will
 * contain only those variables that `useEffect` will listen for any changes to those variables.
 * @returns 
 */
export const UseEffectConditionalRun = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useEffect - Updating document title`)
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}
