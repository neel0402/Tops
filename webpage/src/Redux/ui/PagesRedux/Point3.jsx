import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import {decrementByTen, incrementByFive, incrementByOne} from '../../Feature/point/Point1'


export default function Point3() {
    const pointData = useSelector((store)=>{
        return store.pointReducer.point
    })
    let dispatch = useDispatch();

  return (
<div style={{width:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
    
    <h3 className='mb-4 mt-4'>point is {pointData}</h3>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByOne())}>Increment_1</Button>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByFive())}>Increment_5</Button>
    <Button color='danger' onClick={()=>dispatch(decrementByTen())}>Decrement_10</Button>
    </div>   
    )
}