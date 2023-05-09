import React from "react";
import BrandBar from "./components/BrandBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import  NavBar  from "./NavBar"
import { Contact } from "./pages/Contact";
import  Shop  from "./pages/Shop";

function App() {
  return (
    <>
    <BrandBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;