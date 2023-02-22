import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBrands, getProducts, getTypes } from './redux/slices/thunks.js'
import Products from './components/Products.jsx'
import ProductPage from './components/Product.jsx'
import About from './components/About.jsx'
import SignIn from './components/Sing-in.jsx'
function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getTypes())
    dispatch(getBrands())
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/product/:id' element={<ProductPage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/log-in' element={<h1>Log in</h1>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='*' element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
