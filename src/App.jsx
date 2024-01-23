import Navbar from "./Components/Navbar.jsx"
import "./App.css"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import LoginSigin from "./Components/LoginSigin.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginSigin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App