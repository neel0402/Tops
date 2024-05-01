import React, { useEffect, useState } from 'react'
import Card1 from '../../../../Component/Cards/Card1/Card1'
import { BE_URL } from '../../../../../../Config'
import axios from 'axios'

export default function Men() {

    let [cardData, setCardData] = useState([])
    console.log("🚀 ~ Men ~ cardData:", cardData)


    useEffect(() => {
        axios({
            method: "get",
            url: `${BE_URL}/product/getAll`
        }).then((res) => {
            console.log("🚀 ~ Men ~ res:", res)
            setCardData(res?.data?.data)
        }).catch((err) => {
            console.log("🚀 ~ Men ~ err:", err)

        })
    }, [])

    
    return (
        <div className='flex flex-wrap justify-between'>
            {
                cardData?.map((e, i) => {
                    return <Card1 key={i} data={e}/>

                })
            }
        </div>
    )
}



// import React, { useEffect, useState } from 'react';
// import Card1 from '../../../../Component/Cards/Card1/Card1';
// import { BE_URL } from '../../../../../../Config';
// import axios from 'axios';

// export default function Men() {
//     const [cardData, setCardData] = useState([]);
//     console.log("🚀 ~ Men ~ cardData:", cardData);

//     useEffect(() => {
//         axios({
//             method: "get",
//             url: `${BE_URL}/product/getAll`
//         }).then((res) => {
//             console.log("🚀 ~ Men ~ res:", res);
//             setCardData(res?.data?.data);
//         }).catch((err) => {
//             console.log("🚀 ~ Men ~ err:", err);
//         });
//     }, []);

//     return (
//         <div>
//             {
//                 cardData?.map((e, i) => (
//                     <Card1 key={i} />
//                 ))
//             }
//         </div>
//     );
// }
