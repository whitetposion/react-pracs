import Axios  from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("");
  const [predictage, setpredictage] = useState(null);
  const fetchData = ()=> {
    
    Axios.get(`https://api.agify.io/?name=${name}`).then( (res)=> { 
      setpredictage(res.data);
      
    });
  };
  const [excuse, setexcuse] = useState("");
  
  const fetchData1 = (any)=> {
    
    Axios.get(`https:excuser.herokuapp.com/v1/excuse/${any}/`).then( (res)=> { 
      setexcuse(res.data[0].excuse);
      console.log(res.data);
      
    });
  };
  return (
    <div className="App">
      
      <input placeholder='Enter your name' onChange={(event)=>
        {setname(event.target.value);}}></input>
      <button onClick={fetchData}> Predict age</button>
      <p> Name {predictage?.name}, age {predictage?.age}</p>

      <button onClick={()=>fetchData1("party") }>party</button>
      <button onClick={()=>fetchData1("office") }>office</button>
      <button onClick={()=>fetchData1("family") }>familys</button>
      <p>{excuse}</p>
    </div>
    
  );
}

export default App;
