import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout'
import AllProducts from './pages/AllProducts'
import ProductDetail from './pages/ProductDetail'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<AllProducts />} />
          <Route path="/:productId" element={<ProductDetail />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

