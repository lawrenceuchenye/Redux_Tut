import { useSelector } from "react-redux"

const Home=()=>{
    const counter=useSelector((state)=>state.counter);
    return(
        <div>
           <h1>Yo! {counter} </h1>
        </div>
    );
}

export default Home;
