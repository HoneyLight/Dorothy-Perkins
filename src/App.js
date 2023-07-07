import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DPProvider from './contexts/DPcontext';

function App() {
  return (
    <DPProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/shop/:category/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </DPProvider>
  );
}

export default App;


        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>