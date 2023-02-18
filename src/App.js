import './App.css';
import { BrowserRouter as Router  , Routes, Route , Link, Form} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./pages/components/Navbar.js" // for navbar
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { form } from "./pages/components/Form"

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client= {client}>
      <Router>
        <div>
          <Navbar/>
          <Home/>
          <Form/>
        </div>
        <Routes>
          
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
    
  );
}

export default App;
