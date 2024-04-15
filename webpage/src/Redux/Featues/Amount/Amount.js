import { createSlice } from "@reduxjs/toolkit";

// export const selectAmountState = state => state.amount; // Adjust this according to your actual slice structure


const amountSlice =createSlice({
    name:"amount",
    initialState:{amount:50},
    reducers:{
        incrementByOne:(state,action) => {      
            state.amount++
        },
        incrementByFive:(state,action) => {      
            state.amount+=5
        },
        decrementByTen:(state,action)=>{
            state.amount-=10           // state.count= state.count-10
        }
      },
    
});

export default amountSlice.reducer
export const {incrementByOne,decrementByTen,incrementByFive} = amountSlice.actions