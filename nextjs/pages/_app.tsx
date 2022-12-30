import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from "axios";


export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "http://127.0.0.1:8000"
  return <Component {...pageProps} />
}
