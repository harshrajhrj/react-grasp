import './App.css';
import { RunOnce } from './components/useEffect/RunOnce';
import { UseEffectConditionalRun } from './components/useEffect/UseEffectConditionalRun';
import { UseEffectFetch } from './components/useEffect/UseEffectFetch';
import { UseEffectFetchIndividual } from './components/useEffect/UseEffectFetchIndividual';
import { UseEffectInterval } from './components/useEffect/UseEffectInterval';
import { UseEffectUpdateTitle } from './components/useEffect/UseEffectUpdateTitle';
import { UseStateWithArray } from './components/useState/UseStateWithArray';
import { UseStateWithObject } from './components/useState/UseStateWithObject';
import { UseStateWithPreviousState } from './components/useState/UseStateWithPreviousState';

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
        <UseEffectFetchIndividual />
      </div>
    </>
  );
}

export default App;
