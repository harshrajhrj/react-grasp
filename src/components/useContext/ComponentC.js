import { TechContext, UserContext } from "../../App"

/**
 * The following snippet consumes `UserContext` from the context created in `App.js`
 * with the help of `.createContext()`. So, at any level(usually talking about
 * component hierarchy) we can simply import the context which is exported in `App.js`.
 * @example <UserContext.Consumer>
                {
                    user => {
                        return <div>User context value {user}</div>
                    }
                }
            </UserContext.Consumer>
 * Working with multiple contexts can be achieved by wrapping each child `Context.Consumer` into another `Context.Consumer`
 * to use the context values. But this is not preferred while working with more than one contexts due to huge nested codes and
 * very less readability.
 * @example <UserContext.Consumer>
                {
                    user => {
                        return (
                            <TechContext.Consumer>
                                {
                                    tech => {
                                        return (
                                            < div > User context value {user}, tech - {tech}</div>
                                        )
                                    }
                                }
                            </TechContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer >
 * @returns 
 */
export const ComponentC = () => {
    return (
        <>
            <div>ComponentC</div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <TechContext.Consumer>
                                {
                                    tech => {
                                        return (
                                            < div > User context value {user}, tech - {tech}</div>
                                        )
                                    }
                                }
                            </TechContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer >
        </>
    )
}
