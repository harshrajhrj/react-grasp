import { useState } from 'react'
import { useInput } from './hooks/useInput'

export const UserForm = () => {
    /**
     * Replaces
     * const [firstName, setFirstName] = useState('')
     */
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    /**
     * Replaces
     * const [lastName, setLastName] = useState('')
     */
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input type='text' {...bindFirstName} />
                </div>
                <div>
                    <label>Last name</label>
                    <input type='text' {...bindLastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
