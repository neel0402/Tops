import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BE_URL } from '../../../../Config'

export default function ProductPreview() {
    let [singleproduct, setSingleProduct] = useState([])
    console.log("🚀 ~ ProductPreview ~ singleproduct:", singleproduct)
    let urlData = useParams()
    useEffect(() => {
        axios({
            method: "get",
            url: `${BE_URL}/product/getProductById/${urlData.id}`,
        }).then((res) => {
            setSingleProduct([res?.data?.data])
        }).catch((err) => {
            toast.error("Error occurred while fetching data",err )
        })
    }, [])

    return (

        <div>
            {
                singleproduct.map((e, i) => {
                    return (
                        <div className='pl-96 d-flex'
                            style={{
                                width: "1200px",

                            }}>
                            <div>
                                <img src={e.thumbnail} alt="" className='h-96 w-96' />
                            </div>
                            <div className='w-96'>
                                <h1 className='text-black font-semibold text-3xl'>{e?.title}</h1>
                                <br />
                                <h1 className='font-semibold text-xl text-red-600'>{e?.price}</h1>
                                <br />
                                <h1 className='text-black font-semibold text-sm'>{e?.category}</h1>
                                <br />
                                <div>
                                    <button className='bg-red-500 text-white h-10 w-40'
                                    role='button' 
                                    style={{
                                        border: 'none',
                                        borderRadius:'5px',
                                    }}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
