import React from 'react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom'

export default function SubHeader() {
    const [{ user }] = useCookies(["user"])
    return (
        <>
            {
                user?.userType === "admin" ?
                    <div className='d-flex gap-20 justify-center font-semibold pb-5 pl-10'>
                        <NavLink className="text-decoration-none  hover:text-sky-600 hover:scale-110 duration-300" to={"/admin-dashboard"}>Dashboard</NavLink>
                        <NavLink className="text-decoration-none hover:text-sky-600 hover:scale-110 duration-300" to={"/admin-order"}>Order</NavLink>
                        <NavLink className="text-decoration-none hover:text-sky-600 hover:scale-110 duration-300" to={"/admin-product"}>Product</NavLink>
                        <NavLink className="text-decoration-none hover:text-sky-600 hover:scale-110 duration-300" to={"/admin-user"}>User</NavLink>
                    </div>
                    :
                    <div className='d-flex gap-5 pb-5 justify-center text-lg'>
                        <NavLink className="text-decoration-none" to={"product/Men's Watches"}>Men</NavLink>
                        <NavLink className="text-decoration-none" to={"product/Women's Watches"}>Women</NavLink>
                        <NavLink className="text-decoration-none" to={"product/Kid's Watches"}>kids</NavLink>
                    </div>
            }
        </>
    )
}
