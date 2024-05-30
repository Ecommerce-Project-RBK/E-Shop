
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Contact from "./components/Contact.jsx";
import navBar from "./components/Navbar.jsx"
import AdminDashboard from "./components/adminDashboard.jsx"; 

function App() {
  return  <div>
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editProfil" element={<EditProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminDashboard />} /> 
      </Routes>
    </Router>
    </div>
  
  



  
}

export default App;
