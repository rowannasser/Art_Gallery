import { Routes, Route, Outlet } from "react-router-dom";
import Navbar_Component from "./components/navbar";
import Products from "./components/products";
import Cart from "./components/cart";
import Check_Out from "./components/checkout";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Sales from "./components/sales";
import File_Manager from "./components/filemanager";
import Add_Product from "./components/addproduct";
import Login from "./components/login";
import Category from "./components/category";

function App() {
  return (
    <div className="App">
      <Navbar_Component />
      <Routes>
        {/* Login and Home Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products Route with Optional Category */}
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />} />
        </Route>

        {/* Cart and Checkout Routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Check_Out />} />

        {/* Sales Route with Nested Routes */}
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/filemanager" element={<File_Manager />} />
        <Route path="/sales/addproduct" element={<Add_Product />} />
        <Route path="/sales/category" element={<Category />} />
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
