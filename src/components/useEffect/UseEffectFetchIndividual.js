import { useState, useEffect } from 'react'

/**
 * The following snippet allows `useEffect` to fetch only when the `button` is clicked.
 * And, the `useEffect` now depends on the change of `idFromButton` state.
 * @returns 
 */
export const UseEffectFetchIndividual = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);

    const handleButtonClick = () => {
        setIdFromButton(id);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`, {
            'method': 'GET',
            'credentials': 'include',
            'Content-Type': 'application/json',
            'muteHttpExceptions': true
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                setPost(res);
            }).catch(err => {
                console.log(err)
            })
    }, [idFromButton])

    return (
        <>
            <div>
                <input type='text' onChange={e => setId(e.target.value)} />
                <button onClick={handleButtonClick}>Fetch data</button>
            </div>
            <div>
                {
                    post.title
                }
            </div>
        </>
    )
}
