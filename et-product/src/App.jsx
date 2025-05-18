// import Checkout from "./compnent/Chenckout/Checkout";
// import Home from "./compnent/home/Home";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/home/Home";
import Checkout from "./component/Chenckout/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
   <>
   <Router>

  
   <div>
    <Header/>
   <Routes> 
    <Route path="/" element={ <Home/>}/>
  <Route path="/Checkout" element={ <Checkout/>}/>
   
   </Routes>
   </div>
    </Router>
   </>
  )
}

export default App
