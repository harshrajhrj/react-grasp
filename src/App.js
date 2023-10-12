import './App.css';
import { createContext, useReducer } from 'react';
import { RunOnce } from './components/useEffect/RunOnce';
import { UseEffectConditionalRun } from './components/useEffect/UseEffectConditionalRun';
import { UseEffectFetch } from './components/useEffect/UseEffectFetch';
import { UseEffectFetchIndividual } from './components/useEffect/UseEffectFetchIndividual';
import { UseEffectInterval } from './components/useEffect/UseEffectInterval';
import { UseEffectUpdateTitle } from './components/useEffect/UseEffectUpdateTitle';
import { UseStateWithArray } from './components/useState/UseStateWithArray';
import { UseStateWithObject } from './components/useState/UseStateWithObject';
import { UseStateWithPreviousState } from './components/useState/UseStateWithPreviousState';
import { UseReducerSimpleCounter } from './components/useReducer/UseReducerSimpleCounter';
import { UseReducerComplexCounter } from './components/useReducer/UseReducerComplexCounter';
import { MultipleUseReducers } from './components/useReducer/MultipleUseReducers';
import { ComponentA } from './components/useReducer-with-useContext/ComponentA';
import { ComponentB } from './components/useReducer-with-useContext/ComponentB';
import { ComponentC } from './components/useReducer-with-useContext/ComponentC';
import { FetchUsingUseEffect } from './components/useReducer-with-fetching/FetchUsingUseEffect';
import { FetchUsingUseReducer } from './components/useReducer-with-fetching/FetchUsingUseReducer';

/**
 * The `.createContext()` helps in maintaining context(or values) at any level of
 * component hierarchy tree.
 */
export const UserContext = createContext();
export const TechContext = createContext();
export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className='App'>
        {/* <UseStateWithPreviousState />
        <UseStateWithObject /> */}
        {/* <UseStateWithArray /> */}
        {/* <UseEffectUpdateTitle /> */}
        {/* <UseEffectConditionalRun /> */}
        {/* <RunOnce /> */}
        {/* <UseEffectInterval /> */}
        {/* <UseEffectFetch /> */}
        {/* <UseEffectFetchIndividual /> */}
        {/* <UserContext.Provider value={'Harsh Raj'}>
          <TechContext.Provider value={'React JS'}>
            <ComponentA />
          </TechContext.Provider>
        </UserContext.Provider> */}
        {/* <UseReducerSimpleCounter /> */}
        {/* <UseReducerComplexCounter /> */}
        {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          <div>
            Count - {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </div>
        </CountContext.Provider> */}
        {/* <FetchUsingUseEffect /> */}
        <FetchUsingUseReducer />
      </div>
    </>
  );
}

export default App;
