import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (  
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products/>}/>
        <Route Path="/ About" element={<Products />}/>
        <Route Path="/Contact" element={<Products />}/>
      </Routes>
    </Router>
  );
}
 
export default App;