import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {
  Home,
  About,
  Products,
  Contact,
  SinglePageProduct,
  Cart,
  Profile,
  ErrorPage,
} from "./pages/index";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop smooth style={{ backgroundColor: "#ff2020" }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SinglePageProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
