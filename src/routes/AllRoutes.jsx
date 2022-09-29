import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import Contacts from "../components/Contacts";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductsId from "../components/ProductsId";
import Register from "../components/Register";

export default function AllRoutes() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductsId />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
}
