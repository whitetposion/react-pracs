import './App.css';
import { BrowserRouter as Router  , Routes, Route , Link} from 'react-router-dom';
import {Home} from './pages/home';
import { ContantUs } from './pages/contactus';
import { Menu } from './pages/menu';
import Navbar from "./pages/components/Navbar.js"
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Link to={"/"}>home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contactus"}>contactus</Link>
        </div>
        <Routes>
          
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
