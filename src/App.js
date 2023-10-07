import './App.css';
import { UseStateWithArray } from './components/useState/UseStateWithArray';
import { UseStateWithObject } from './components/useState/UseStateWithObject';
import { UseStateWithPreviousState } from './components/useState/UseStateWithPreviousState';

function App() {
  return (
    <>
      <div className='App'>
        {/* <UseStateWithPreviousState />
        <UseStateWithObject /> */}
        <UseStateWithArray />
      </div>
    </>
  );
}

export default App;
