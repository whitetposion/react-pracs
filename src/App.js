import './App.css';
import { BrowserRouter as Router  , Routes, Route , Link} from 'react-router-dom';
import Home from './pages/components/Home';
import Navbar from "./pages/components/Navbar.js"
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Home/>
        </div>
        <Routes>
          
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
