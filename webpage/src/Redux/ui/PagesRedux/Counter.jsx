import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import {decrementByTen, incrementByFive, incrementByOne,inputInc} from '../../Feature/Count/counter'
import { Plus } from 'lucide-react';

export default function Counter() {
 
  let [num , setNum] = useState(0)

  let data = useSelector((store) => {
      return store?.countReducer?.count;
    
})

const inputHandeler =()=>{
  dispatch(inputInc(num)) //transfer the value of state in function call time its call payload
  setNum("")
}

let dispatch = useDispatch();

  console.log("🚀 ~ data ~ data:============", data)


  return (
    <div className=' d-flex row'>
    <div style={{width:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
    
    <h3 className='mb-4 mt-4'>Counter is {data}</h3>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByOne())}>Increment_1</Button>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByFive())}>Increment_5</Button>
    <Button color='danger' onClick={()=>dispatch(decrementByTen())}>Decrement_10</Button>
    </div>

<div className='pt-5 ps-5 d-flex gap-4'>
    <input type="number" name="" id="" placeholder='Enter number' value={num} onChange={(e)=>setNum(e?.target?.value)} />
    <h2>{num}</h2>
    <button className='border rounded-2 text-light bg-danger' onClick={()=> inputHandeler()}><Plus/></button>

</div>
    </div>
  )
}