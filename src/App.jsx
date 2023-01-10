import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./components/product/Product";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
