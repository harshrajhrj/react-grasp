import './App.css';
import { createContext } from 'react';
import { ComponentA } from './components/useContext/ComponentA';
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

/**
 * The `.createContext()` helps in maintaining context(or values) at any level of
 * component hierarchy tree.
 */
export const UserContext = createContext();
export const TechContext = createContext();

function App() {
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
        <MultipleUseReducers />
      </div>
    </>
  );
}

export default App;
