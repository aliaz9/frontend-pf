import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from './redux/slices/thunks.js'
import Products from './components/Products.jsx'
import ProductPage from './components/Product.jsx'
function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/product/:id' element={<ProductPage/>} />
            <Route path='*' element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
