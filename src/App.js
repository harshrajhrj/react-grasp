import logo from './logo.svg';
import './App.css';
import './Styling/li.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
