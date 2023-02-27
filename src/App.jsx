import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  getBrands,
  getProducts,
  getTypes
} from './redux/slices/thunksProducts.js'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import SignIn from './pages/Sing-in.jsx'
import LoginForm from './pages/LoginForm.jsx'
import ProductPage from './pages/Product.jsx'
import Cart from './components/Cart.jsx'
import Form from './components/Form.jsx'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getTypes())
    dispatch(getBrands())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/formulario" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
