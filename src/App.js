import './App.css';
import { BrowserRouter as Router  , Routes, Route , Link} from 'react-router-dom';
import {Home} from './pages/home';
import { ContantUs } from './pages/contactus';
import { Menu } from './pages/menu';
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          Navbar
          <Link to={"/"}>home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contactus"}>contactus</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contactus" element={<ContantUs/>}/>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
