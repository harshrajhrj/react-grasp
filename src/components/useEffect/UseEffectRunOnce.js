import { useState, useEffect } from 'react'

/**
 * If we don't provide any second parameter to `useEffect`, then the hook considers to execute the function
 * after every re-render of the component. To avoid this and execute `useEffect` only in initial
 * render, we provide the second param as empty array like [ ].
 * @returns 
 */
export const UseEffectRunOnce = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}
