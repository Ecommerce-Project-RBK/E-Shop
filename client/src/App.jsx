
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./Signup.jsx";


function App() {
  return  <div>
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
}

export default App;
