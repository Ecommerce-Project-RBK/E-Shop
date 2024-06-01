
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Contact from "./components/Contact.jsx";
import AdminDashboard from "./components/adminDashboard.jsx"
import About from "./components/About.jsx"
import Cart from "./components/Cart.jsx";
import HomePage from "./components/HomePage.jsx";
import SellerPage from "./components/SellerPage.jsx"
import ProductPage from "./components/OneProduct.jsx"
import NotFoundPage from "./components/404Page.jsx"


function App() {
  return  <div>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editProfil" element={<EditProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminDashboard/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/add" element={<SellerPage/>} />
      <Route path="/oneproduct" element={<ProductPage/>} />
      <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  
  



  
}

export default App;
