import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Ui/Pages/Common/Home'
import AboutUs from '../Ui/Pages/Common/AboutUs'
import Shop from '../Ui/Pages/Common/Shop'
import ContactUs from '../Ui/Pages/Common/ContactUs'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contactus' element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
