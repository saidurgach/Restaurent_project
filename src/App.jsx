import {BrowserRouter as BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import PageNotFound from "./pages/PageNotFound"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
function App() {
 return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
        
        </Routes>
        <Footer />
        </BrowserRouter>
      
    </div>
  )
}

export default App
