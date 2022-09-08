import "./App.css";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app_section">
      <Navigation />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
