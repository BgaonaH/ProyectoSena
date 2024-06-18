//import logo from './logo.svg';
import './App.css';
import Navigation from './Personalizacion/componentes/Navigation/Navigation.jsx';
import HomePage from './Personalizacion/componentes/pages/Homepage/HomePage.jsx';
import Footer from './Personalizacion/componentes/Footer/Footer.jsx';
import Product from './Personalizacion/componentes/Product/Product.jsx';
import ProductDetail from './Personalizacion/componentes/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <div className="App">
     <div>
        <Navigation/>
      </div>
        {/*<HomePage/>*/}
        {/*<Product/>*/}
        <ProductDetail/>
        <Footer/>

    </div>
  );
}

export default App;
