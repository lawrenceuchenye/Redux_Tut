import '../styles/globals.css'
import { Provider } from "react-redux"
import { createStore } from "redux"
import  storeConfig from "./store"

function MyApp({ Component, pageProps }) {
  return (
        <Provider store={storeConfig}>
           <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp
