import { useReducer, useEffect } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {}
            }
        default:
            return state;
    }
}

export const FetchUsingUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {
                state.loading ? 'Loading' : state.post.title
            }
            {
                state.error ? state.error : null
            }
        </div>
    )
}
