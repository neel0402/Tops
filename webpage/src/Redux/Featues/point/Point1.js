import { createSlice } from "@reduxjs/toolkit";

const pointSlice = createSlice({
    name:"point",
    initialState: {point:99.00},
    reducers:{
        incrementByOne:(state,action) => {      
            state.point++
        },
        incrementByFive:(state,action) => {      
            state.point+=5
        },
        decrementByTen:(state,action)=>{
            state.point-=10           // state.count= state.count-10
        }
      },
    
})

export default pointSlice.reducer
export const {incrementByOne,decrementByTen,incrementByFive} = pointSlice.actions