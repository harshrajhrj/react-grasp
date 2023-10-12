import { useEffect, useRef } from 'react'

/**
 * `useRef` hook helps to imperatively access DOM nodes.
 * In this example, when the component mounts then, immediately at the momemt the input element gets focus
 * with the help of `useRef()` hook.
 * @returns 
 */
export const FocusInput = () => {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}
