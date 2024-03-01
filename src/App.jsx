import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout'
import AllProducts from './pages/AllProducts'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import AuthRequired from './pages/AuthRequired'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<AllProducts />} />
          <Route path=":productId" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />} >
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

