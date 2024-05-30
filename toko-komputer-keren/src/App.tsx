import { ChakraProvider } from '@chakra-ui/react'
import theme from './style/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/mulish'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './screen/Home'
import Products from './screen/Products'
import Login from './screen/Login'
import Cart from './screen/Cart'
import Checkout from './screen/Checkout'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='products/:category' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='*' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
