import { memo } from "react";

function Title() {
    console.log('Rendering Title');
    return (
        <h2>
            useCallback hook
        </h2>
    )
}

export default memo(Title);