import { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button';

/**
 * `useCallback` is a hook that will return a memoized version of the callback function
 * that only changes if one the dependencies has changed.
 * ---
 * What does it mean is `useCallback` will cache `incrementSalary` function and return
 * that if the salary is not incremented. If the salary does increment that is when the
 * dependency has changed only then a new function will be returned.
 * ---
 * It is useful when passing callbacks to optimized child components that rely on reference equality
 * to prevent unnecessary renders.
 * ---
 * How to use **useCallback**(`CallbackFunction`, `ArrayOfDependencies`)
 * @param CallbackFunction Any callback function
 * @param ArrayOfDependencies The dependencies to lookup for the callback function to make changes
 * @returns 
 */
export const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text={'Age'} count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={'Salary'} count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
