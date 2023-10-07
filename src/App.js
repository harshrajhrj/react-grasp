import './App.css';
import { UseStateWithArray } from './components/UseStateWithArray';
import { UseStateWithObject } from './components/UseStateWithObject';
import { UseStateWithPreviousState } from './components/UseStateWithPreviousState';

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
