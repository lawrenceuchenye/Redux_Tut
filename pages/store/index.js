
const reducer=(state={ counter:10 },action)=>{
    switch(action.type){
        case "INC":
            return { counter : state.counter+1 };

        case "DEC":
            return { counter : state.counter-1};
         case "ADD":
            return { counter : state.counter + action.payload };
        default:
            return state;
    }
};

export default reducer;


import { configureStore,createSlice } from "@reduxjs/toolkit";


const storeSlice=createSlice({
    name:"counter",
    initialState:{counter:10},
    reducers:{
        increment(state,action){
           state.counter+=1;
        },
        decrement(state,action){
            state.counter-=1;
        },
        addBy(state,action){
            state.counter+=action.payload;
        }

    }
});


const storeConfig=configureStore({
    reducer:storeSlice.reducer
});

const actions=storeSlice.actions;

export { storeConfig ,actions }

