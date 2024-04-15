import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../Image/logo.webp";
import { Heart, SearchCheck, ShoppingCart, User } from 'lucide-react';
import LoginModal from '../../Modal/LoginModal';
import RegisterModal from '../../Modal/RegisterModal'

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal,setRegisterModal]=useState(false);

  
  const loginToggle = () => setLoginModal(!loginModal);
  const registerToggle = ()=>setRegisterModal(!registerModal)
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-75'>
          <div className='flex justify-between items-center my-8'>
            <div className='flex items-center font-semibold text-base gap-14'>
              <NavLink className="text-decoration-none" to={"/"}> Home</NavLink>
              <NavLink className="text-decoration-none" to={"/about"}>AboutUs</NavLink>
              <NavLink className="text-decoration-none" to={"/contactus"}>ContactUs</NavLink>
              <NavLink className="text-decoration-none" to={"/shop"}>Shop</NavLink>
            </div>
            <div className='flex items-center'>
              <img src={logo} alt="Logo" className='h-14' />
            </div>
            <div className='flex items-center gap-14'>
              <span className='text-gray-600'><SearchCheck strokeWidth={1.5} /></span>
              <div className='flex items-center gap-4'>
                <span className='text-gray-600'><User fill='true' role='button' onClick={loginToggle} /></span>
                <span className='text-gray-600'><Heart size={23} strokeWidth={1.5} fill='true' /></span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-black-600 font-extrabold'>₹0.00</span>
                <span className='text-gray-600'><ShoppingCart strokeWidth={1.5} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal toggle={loginToggle} model={loginModal}  registerToggle={registerToggle}  />
      <RegisterModal toggle={registerToggle} model={registerModal} login={loginToggle}/>
    </>
  );
}

