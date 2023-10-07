import { useState } from 'react';
import { UseEffectRunOnce } from './UseEffectRunOnce';

/**
 * In `UseEffectRunOnce` component, we detached the eventlistener 'mouseover' from
 * the `window` when the component `UseEffectRunOnce` is unmounted. Just to prevent
 * any unusual behaviour of memory leak from a component's variable.
 * @returns 
 */
export const RunOnce = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {
                display && <UseEffectRunOnce />
            }
        </>
    )
}
