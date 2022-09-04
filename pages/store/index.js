import { createStore } from "redux"

const reducer=(state={ counter:10 },action)=>{
    switch(action.type){
        case "INC":
            return { counter : state.counter+1 };

        case "DEC":
            return { counter : state.counter-1};

        default:
            return state;
    }
};

export default reducer;
