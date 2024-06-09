//import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Personalizacion/componentes/navegacion/Navigation.jsx';
import HomePage from './Personalizacion/pages/HomePage.jsx';
import Footer from './Personalizacion/componentes/navegacion/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navigation/>
    <div>
      <HomePage/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
