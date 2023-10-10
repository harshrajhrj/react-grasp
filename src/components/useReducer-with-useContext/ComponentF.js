import { useContext } from 'react'
import { CountContext } from '../../App'

export const ComponentF = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentF - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
