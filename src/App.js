import {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from  "./components/Banner";
import { Skills } from  "./components/Skills";
import { Projects } from  "./components/Projects";

import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer"
import ClipLoader from "react-spinners/ClipLoader";


function App() {

const [loading, setLoading] = useState(false); 
useEffect(() => {
setLoading(true)
setTimeout(() =>{
setLoading(false)
},3000)
}, [])

  return (
    <div className="App">
      
      

   <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
          
 </div>
  );
}

export default App;
