import '../styles/globals.css'
import { Provider } from "react-redux"
import { createStore } from "redux"
import  reducer  from "./store"

function MyApp({ Component, pageProps }) {
  return (
        <Provider store={createStore(reducer)}>
           <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp
