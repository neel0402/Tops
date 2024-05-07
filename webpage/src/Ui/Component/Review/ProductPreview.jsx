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
            toast.error("Error occurred while fetching data")
        })
    }, [])

    return (

        <div>
            {
                singleproduct.map((e, i) => {
                    return (
                        <div className='pl-96 d-flex'
                            style={{
                                width:"1200px",
                            }}>
                            <div>
                                <img src={e.thumbnail} alt="" className='h-96 w-96' />
                            </div>
                            <div className='w-96'>
                                <h1 className='text-black font-semibold text-2xl'>{e.title}</h1>
                                <h1 className='text-black font-semibold text-2xl'>{e.price}</h1>
                                <br />
                                <h1 className='text-black font-semibold text-lg'>{e.category}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
