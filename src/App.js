import React ,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PhotoOfDay from "./components/PhotoOfDay";

function App() {

  const[nasaData, setNasaData] = useState(null);

useEffect(()=>{

axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then((res)=>{

  setNasaData(res.data);
  document.title ="Nasa projesi";

})

console.log("nasa datası alındı");

},[]);

  return (

    <div className="App">
     
     <PhotoOfDay nasaData={nasaData}/>
    
    </div>


  );
}

export default App;
