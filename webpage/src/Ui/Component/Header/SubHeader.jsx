import React from 'react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom'

export default function SubHeader() {
    const [{ user }] = useCookies(["user"])
    return (
        <>
            {
                user?.userType === "admin" ?
                    <div className='d-flex gap-2'>
                        <NavLink className="text-decoration-none" to={"/admin-dashboard"}>Dashboard</NavLink>
                        <NavLink className="text-decoration-none" to={"/admin-order"}>Order</NavLink>
                        <NavLink className="text-decoration-none" to={"/admin-product"}>Product</NavLink>
                        <NavLink className="text-decoration-none" to={"/admin-user"}>User</NavLink>
                    </div>
                    :
                    <div className='d-flex gap-2'>
                        <NavLink className="text-decoration-none" to={"/user-men-watches"}>Men</NavLink>
                        <NavLink className="text-decoration-none" to={"/user-Women's Watches"}>Women</NavLink>
                        <NavLink className="text-decoration-none" to={"/user-Kid's Watches"}>kids</NavLink>
                    </div>
            }  
        </>
    )
}
