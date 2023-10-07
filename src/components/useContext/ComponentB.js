import { useContext } from "react";
import { TechContext, UserContext } from "../../App";
import { ComponentC } from "./ComponentC";

/**
 * The following code snippet uses `useContext` hook to consume the context values created in
 * `App.js`. It can be easily seen that how much the code is simplified with the help of `useContext`
 * hook as compared to the snippet in `ComponentC`.
 * @returns 
 */
export const ComponentB = () => {
    const user = useContext(UserContext);
    const tech = useContext(TechContext);
    return (
        <div>
            {user} - {tech}
        </div>
    )
}
