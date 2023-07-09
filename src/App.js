import './App.css';
import './components/Navbar.css'
import "./components/Home.css";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { Category } from './components/Category';
import { NewProduct } from './components/NewProduct';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />}>
            <Route path='category' element={<Category />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
