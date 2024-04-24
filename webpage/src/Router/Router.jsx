import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Ui/Pages/Common/Home'
import AboutUs from '../Ui/Pages/Common/AboutUs'
import Shop from '../Ui/Pages/Common/Shop'
import ContactUs from '../Ui/Pages/Common/ContactUs'
import Dashboard from '../Ui/Pages/admin/Dashboard/Dashboard'
import Order from '../Ui/Pages/admin/Order/Order'
import Product from '../Ui/Pages/admin/Product/Product'
import User from '../Ui/Pages/admin/User/User'
import Singleproduct from '../Ui/Pages/user/Product/Singleproduct'
import UserProduct from '../Ui/Pages/user/Product/UserProduct'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* common */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contactus' element={<ContactUs />} />

                    {/* admin */}
                    <Route path='/admin-dashboard' element={<Dashboard />} />
                    <Route path='/admin-order' element={<Order />} />
                    <Route path='/admin-product' element={<Product />} />
                    <Route path='/admin-user' element={<User />} />

                    {/* User */}
                    <Route path='/user-singleproduct' element={<Singleproduct />} />
                    <Route path='/user-userproduct' element={<UserProduct />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
