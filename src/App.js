import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Login from "./Home/Login";
import Signup from "./Home/Signup";
import Footer from "./Home/Footer";
import Aboutus from "./Home/Aboutus"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
