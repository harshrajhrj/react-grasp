import './App.css';
import './Styling/li.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
