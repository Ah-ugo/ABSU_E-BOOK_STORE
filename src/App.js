import "./App.css";
import "antd/dist/reset.css";
import HomeIndexPage from "./FrontPage/HomeIndex";
import "@fontsource/inter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCollection from "./FrontPage/ProductCollection";
import CartProvider from "./Utils/CartContext";
import ShoppingCart from "./FrontPage/CartPage";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel/dist/owl.carousel';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndexPage />} />
          <Route path="/marketplace" element={<ProductCollection />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
