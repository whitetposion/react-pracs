import Axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [catfact, setcatfact] = useState("");
  const fetchcatfact = ()=> {
    Axios.get("https://catfact.ninja/fact").then((res)=> {
      setcatfact(res.data.fact);
  });
 };
  useEffect(()=> {
    fetchcatfact()}, []);
  return (
    <div className="App">
      <button onClick={fetchcatfact}>cat fact</button>
      <p>{catfact}</p>
    </div>
  );
}

export default App;
