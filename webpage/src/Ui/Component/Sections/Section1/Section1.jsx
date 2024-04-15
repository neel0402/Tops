import React from 'react'
import img1 from "../../Sections/Images/img1.webp"
import img2 from "../../Sections/Images/img2.webp"
import img3 from "../../Sections/Images/img3.webp"

export default function Section1() {
    return (
        <>
            <section>
                <div className="grid grid-cols-3 gap-3 px-40 pt-5 pb-5">
                    <div>
                        <div className='relative'>
                            <img src={img1} alt="" className='h-96 w-96' />
                            <div className='absolute bottom-5 left-48 text-white '>
                                <h4 className='text-3xl'>
                                    Men
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={img2} alt="" className='h-96 w-96' />
                        <div className='absolute bottom-5 left-48 text-white'>
                                <h4 className='text-3xl '>
                                    Women
                                </h4>
                            </div>
                    </div>
                    <div className='relative'>
                        <img src={img3} alt="" className='h-96 w-96' />
                        <div className='absolute bottom-5 left-48 text-white'>
                                <h4 className='text-3xl '>
                                    Kids
                                </h4>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
