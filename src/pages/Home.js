import "./Home.css"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
     const { data , isLoading} = useQuery(["cat"], ()=> {
          return axios.get("https://catfact.ninja/fact").then((res) => res.data
          )
     });
     if (isLoading) {
          return <h1>lOADING</h1>
     }

     return ( <>
          <div className= "home">
               <div className="home text"> 
               <h1>
                    this is home page <p>{data?.fact}</p>
               </h1>
               </div> 
          </div></>
     );
}

export default Home ;