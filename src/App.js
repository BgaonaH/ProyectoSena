//import logo from './logo.svg';
import './App.css';
import Navigation from './Personalizacion/componentes/Navigation/Navigation.jsx';
import HomePage from './Personalizacion/componentes/pages/Homepage/HomePage.jsx';
import Footer from './Personalizacion/componentes/Footer/Footer.jsx';
import Product from './Personalizacion/componentes/Product/Product.jsx';
import ProductDetail from './Personalizacion/componentes/ProductDetails/ProductDetails.jsx';
import Cart from './Personalizacion/componentes/Cart/Cart.jsx';
import Checkout from './Personalizacion/componentes/Checkout/Checkout.jsx'
import Order from './Personalizacion/componentes/Order/Order.jsx';
import OrderDetails from './Personalizacion/componentes/Order/OrderDetails.jsx';
import { Route, Router, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
function App() {
  return (
    
      <div className="App">

        <Routes>
          <Route path='/*' element={<CustomerRouters />}></Route>
        </Routes>




      </div>
    
  );
}

export default App;
