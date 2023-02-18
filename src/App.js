import './App.css';
//import { BrowserRouter as Router  , Routes, Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./pages/components/Navbar.js" // for navbar
//import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Form }  from "./pages/components/Form";

function App() {
  return (
    <div className="App">
      <div>
        <Form/>
        
        <Home/>
        
        
      </div>
    </div>
    
  );
}

export default App;
