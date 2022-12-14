import { useSelector,useDispatch } from "react-redux"
import { actions } from "./store"

const Home=()=>{
   const counter=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
     console.log(actions.increment());
    const increment=()=>{
        dispatch(actions.increment());
    }

    const decrement=()=>{
        dispatch(actions.decrement());
    }
     
    const addBy=()=>{
        dispatch(actions.addBy(10));
    }

    return(
        <div>
        <div>
             <h1>Yo! {counter} </h1>
            </div>
          <div>
              <button onClick={()=>increment()}>+</button>
               <button onClick={()=>decrement()}>-</button>
               <button onClick={()=>addBy()}>Add by 10</button>
             </div>
          <h1>Hello</h1>
        </div>
    );
}

export default Home;
