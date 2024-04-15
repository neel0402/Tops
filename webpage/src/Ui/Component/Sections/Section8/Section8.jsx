import React from 'react'
import { Instagram } from 'lucide-react'

export default function Section8() {
    return (
        <div>
            <div className='text-3xl font-medium m-5 text-center'>
                <h1>Checkout Our Social Fee
                </h1>
            </div>
            <br />
            <div className='flex flex-col items-center gap-2 justify-center bg-[#3f729b] h-10 w-48 text-white m-auto rounded-lg'> 
                <button className='flex gap-2 items-center '><Instagram /> Follow On Instagram</button>
            </div>
        </div>
    )
}
