import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Feature/Count/counter"
import pointReducer from "../Feature/point/Point1"
import amountReducer from '../Feature/Amount/Amount'
import inputReducer from "../../../15.ReduxApi/ReduxApi2/Feature1/Input/InputFormCurd"

export const store = configureStore({
    reducer:{
        //key        // value 
        countReducer:countReducer,
        amountReducer:amountReducer,
        pointReducer:pointReducer,
        inputReducer,  // key and value name are same thats why only inputReducer in destructure way
    },
})

// store={
//     countReducer:{count:900},
// };