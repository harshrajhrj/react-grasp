import { useState, useEffect } from 'react'

export const FetchUsingUseEffect = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            muteHttpExceptions: true,
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPost(data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setPost({})
                setError('Something went wrong!')
            })
    }, [])
    return (
        <div>
            {
                loading ? 'Loading' : post.title
            }
            {
                error ? error : null
            }
        </div>
    )
}
