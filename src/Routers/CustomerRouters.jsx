import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navigation from '../Personalizacion/componentes/Navigation/Navigation'
import Footer from '../Personalizacion/componentes/Footer/Footer'
import HomePage from '../Personalizacion/componentes/pages/Homepage/HomePage'
import Checkout from '../Personalizacion/componentes/Checkout/Checkout'
import Cart from '../Personalizacion/componentes/Cart/Cart'
import Product from '../Personalizacion/componentes/Product/Product'
import ProductDetail from '../Personalizacion/componentes/ProductDetails/ProductDetails'
import Order from '../Personalizacion/componentes/Order/Order'
import OrderDetails from '../Personalizacion/componentes/Order/OrderDetails' 
const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>   
        </div>
        
        <Routes> 
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:lavelone/:laveltwo/:lavelthre' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        </Routes>
        
       
        
        
        {/*<Checkout/>*/}
        {/*<Order/>*/}
        {/*<OrderDetails/>*/}
        <div>
        <Product/>
        <Footer/>  
        </div>
    </div>
  )
}

export default CustomerRouters