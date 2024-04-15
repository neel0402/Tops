import React from 'react'
import { Home } from 'lucide-react'
import { BookA } from 'lucide-react'
import { Phone } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { Baby } from 'lucide-react'
import { BookHeart } from 'lucide-react'
import { Watch } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Columns4 } from 'lucide-react'
import { TicketSlash } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
import { ContactRound } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import logo from '../Footer/logo.webp'

export default function Footer() {
    return (
        <div className='bg-black'>
            <div className='flex justify-center pt-10 pr-10'>
                <img src={logo} alt="" className='h-28 w-28' />
            </div>
            <div className='grid grid-cols-4 pl-28'>
                <ul className='text-white'>
                    <h3 className='text-2xl pl-7 pb-4 font-bold'>Quick Links</h3>
                    <li className='flex gap-1 pb-3'><Home />Home</li>
                    <li className='flex gap-1 pb-3'><BookA />About Us</li>
                    <li className='flex gap-1 pb-3'><Phone />Contact Us</li>
                    <li className='flex gap-1 pb-3'><ShoppingCart />Shop</li>
                </ul>
                <ul className='text-white'>
                    <h3 className='text-2xl pl-7 pb-4 font-bold'>Categories</h3>
                    <li className='flex gap-1 pb-3'><Baby />Kids Watches</li>
                    <li className='flex gap-1 pb-3'><Watch />Men Watches</li>
                    <li className='flex gap-1 pb-3'><BookHeart />Woman Watches</li>
                </ul>
                <ul className='text-white'>
                    <h3 className='text-2xl pl-7 pb-4 font-bold'>Use Full Link</h3>
                    <li className='flex gap-1 pb-3'><Handshake />Terms & Condition</li>
                    <li className='flex gap-1 pb-3'><Columns4 />Privacy & Policy</li>
                    <li className='flex gap-1 pb-3'><TicketSlash />Refund & Exchange Policy</li>
                </ul>
                <ul className='text-white'>
                    <h3 className='text-2xl pl-7 pb-4 font-bold'>Location</h3>
                    <li className='flex gap-1 pb-3'><MapPin size={40} />Sanskruti Worldwide LLP, Senapati Bapat Marg, Dadar West, Mumbai</li>
                    <li className='flex gap-1 pb-3'><Mail />info@logueswatches.com</li>
                    <li className='flex gap-1 pb-3'><ContactRound />9898989898</li>
                </ul>
            </div>
            <div className='flex justify-center gap-6'>
                <div className=' text-black bg-white rounded-full align-middle'><Facebook size={25}/></div>
                <div className='text-white'><Instagram size={25}/></div>
            </div>
            <div>
                 
            </div>
        </div>
    )
}
