import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Contacts from "./Pages/Contacts"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import PlaceOrder from "./Pages/PlaceOrder"
import Orders from "./Pages/Orders"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Searchbar from "./Components/Searchbar"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/product/:productId" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
