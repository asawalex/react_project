import Navbar from "../src/components/Navbar";
import Body from "../src/components/Body";
import Bodies from "../src/components/Bodies"
import Welcome from "../src/components/welcome";
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
<>
   
     <Navbar />
    <Welcome />
     <Body /> 
     <Bodies /> 
    
    </>
  );
}

export default App;
