
import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
  name: "counter",
  initialState: {count :900},//state 
  reducers:{ // we can create a functon here 
    incrementByOne:(state,action) => {      
        state.count++
    },
    incrementByFive:(state,action) => {      
        state.count+=5
    },
    decrementByTen:(state,action)=>{
        state.count-=10           // state.count= state.count-10
    },
    inputInc:(state,action) => {
      console.log("🚀 ~ ==============action:", action)
      state.count+= +action?.payload
    }

  },
    extraReducers:(builder)=>{
      builder
      .addCase("amount/incrementByFive",(state,action)=>{
        state.count= state.count+5
      })
      .addCase("amount/incrementByOne",(state,action)=>{
        let otherSliceState = action?.payload+1
        console.log("🚀 ~ .addCase ~ otherSliceState:", otherSliceState)
        console.log("🚀 ~ .addCase ~ (otherSliceState+1) %5 === 0:", otherSliceState %5 === 0)
        if (otherSliceState %5 === 0){
          state.count++
        }
          })
    }
  });

export default countSlice.reducer
export const {incrementByOne,decrementByTen,incrementByFive,inputInc} = countSlice.actions