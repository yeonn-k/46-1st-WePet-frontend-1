import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import ProductList from './pages/ProductList/ProductList'
import Purchase from './pages/Purchase/Purchase'
import SignUp from './pages/SignUp/SignUp'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
