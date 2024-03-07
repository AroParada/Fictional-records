import React from "react";
import BrandBar from "./components/BrandBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import  NavBar  from "./NavBar"
import { Contact } from "./pages/Contact";
import  Shop  from "./pages/Shop";
import CartProvider from "./CartContext";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="app-wrapper">
      <CartProvider>
        <BrandBar />
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route exact path="/Admin" element={<PrivateRoute />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;