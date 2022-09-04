import { useSelector,useDispatch } from "react-redux"

const Home=()=>{
    const counter=useSelector((state)=>state.counter);
    const dispatch=useDispatch();

    const increment=()=>{
        dispatch({
            type:"INC"
        });
    }

    const decrement=()=>{
        dispatch({
            type:"DEC",
        });
    }
     
    const addBy=()=>{
        dispatch({
            type:"ADD",
            payload:10
        });
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
        </div>
    );
}

export default Home;
