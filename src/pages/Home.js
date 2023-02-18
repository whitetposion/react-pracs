import "./Home.css"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
     return ( <>
          <div className= "home">
               <div > 
               <h1>
                    this is home page 
               </h1>
               </div> 
          </div></>
     );
}

export default Home ;