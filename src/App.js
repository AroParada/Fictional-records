import React from "react";
import BrandBar from "./components/BrandBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import NavBar from "./NavBar";
import { Contact } from "./pages/Contact";
import Shop from "./pages/Shop";
import CartProvider from "./CartContext";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <CartProvider>
      <div className="app-wrapper">
        <BrandBar />
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home key='home' />} />
            <Route path="/Shop" element={<Shop key='shop' />} />
            <Route path="/Contact" element={<Contact key='contact' />} />
            <Route path="/Login" element={<Login key='contact' />} />
            <Route exact path="/Admin" element={<PrivateRoute key='privateRoute' />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
