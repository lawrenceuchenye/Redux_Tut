
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
    reducer:{
        increment(state,actions){
           state.counter+=1;
        },
        decrement(state,actions){
            state.counter-=1;
        },
        addBy(state,actions){
            state.counter+=actions.payload;
        }

    }
});


const storeConfig=configureStore({
    reducer:storeSlice.reducer
});

console.log(storeConfig.actions);

const actions=storeConfig.actions;

export { storeConfig ,actions }

