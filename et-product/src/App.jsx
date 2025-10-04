// import Checkout from "./compnent/Chenckout/Checkout";
// import Home from "./compnent/home/Home";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/home/Home";
import Checkout from "./component/Chenckout/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap'
import Jeans from "./component/jeans/Jeans";
import Dress from "./component/Dress/Dress";
import Tops from "./component/Tops/Tops";
import Jacket from "./component/Jaketandcoats/Jacket";
import Chatbot from './component/Chatbot/Chatbot';
import Footer from "./component/Footer/Footer";
import Advertisement from "./component/Advertisement/Advertisement";
import Payment from "./component/payment/Payment.jsx";
import PaymentSuccess from "./component/payment/PaymentSuccess";
import PaymentFailure from "./component/payment/PaymentFailure";
import Login from "./component/Login/Login";

function App() {
  

  return (
   <>
   <Router>

  
   <div>
    <Header/>
   <Routes> 
    <Route path="/" element={ <Home/>}/>
    <Route path="/Checkout" element={ <Checkout/>}/>
    <Route path="/jeans" element={<Jeans/>}/>
    <Route path="/Dress" element={<Dress/>}/>
    <Route path="/Tops" element={<Tops/>}/>
    <Route path="/Jacket" element={<Jacket/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/payment-success" element={<PaymentSuccess/>}/>
    <Route path="/payment-failure" element={<PaymentFailure/>}/>
    <Route path="/Login" element={<Login/>}/>
   </Routes>
   </div>
    </Router>
    <Chatbot />
    <Footer />
   </>
  )
}

export default App
