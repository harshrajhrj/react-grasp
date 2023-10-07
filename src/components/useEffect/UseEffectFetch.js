import { useState, useEffect } from 'react'

/**
 * The following code snippet uses `useEffect` to fetch an API and set the data from the
 * fetch to the state variables and thus, rendering the data to the component. To fetch
 * in initial load, we mention [ ] as second parameter in `useEffect`.
 * @returns 
 */
export const UseEffectFetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            'method': 'GET',
            'credentials': 'include',
            'Content-Type': 'application/json',
            'muteHttpExceptions': true
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
