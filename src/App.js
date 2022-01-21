import './App.css';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Routes} from './components/Routes';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Footer/>
        <Routes />
      </div>
    </div>
  );
}

export default App;
