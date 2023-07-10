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
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { AdminUser } from './components/AdminUser';
import { OrderDetails } from './components/OrderDetails';
import { Orders } from './components/Orders';
import { OrderTaker } from './components/OrderTaker';

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
            <Route index element={<Category />} />
            <Route path='category' element={<Category />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:userid' element={<UserDetails />} />
          <Route path='users/admin' element={<AdminUser />} />
          <Route path='orders' element={<Orders />}>
            <Route path=':orderid' element={<OrderDetails />} />
            <Route path='taker' element={<OrderTaker />} />
          </Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
