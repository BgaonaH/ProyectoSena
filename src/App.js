//import logo from './logo.svg';
import './App.css';
import Navigation from './Personalizacion/componentes/Navigation/Navigation.jsx';
import HomePage from './Personalizacion/pages/Homepage/HomePage.jsx';
import Footer from './Personalizacion/componentes/Footer/Footer.jsx';
import Product from './Personalizacion/componentes/Product/Product.jsx';

function App() {
  return (
    <div className="App">
     <div>
        <Navigation/>
      </div>
        {/*<HomePage/>*/}
        <Product/>
        <Footer/>

    </div>
  );
}

export default App;
