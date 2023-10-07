import { useState } from 'react'

/**
 * The snippet in the first example will cause problem. If an individual tries to update
 * `firstName` only then the state hook will only remember `firstName` and it doesn't
 * merge `lastName`.
 * The snippet in the second example is a right way to use a state hook.
 * @example
 * <input
        type='text'
        value={name.firstName}
        onChange={e => setName({ firstName: e.target.value })} />
 * @example
 * <input
        type='text'
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })} />
 * @returns 
 */
export const UseStateWithObject = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} />

            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}
