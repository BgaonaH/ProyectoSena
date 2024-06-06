//import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Personalizacion/componentes/navegacion/Navigation.jsx';
import HomePage from './Personalizacion/pages/HomePage.jsx';


function App() {
  return (
    <div className="App">
      <Navigation/>
    <div>
      <HomePage/>
    </div>
    </div>
  );
}

export default App;
