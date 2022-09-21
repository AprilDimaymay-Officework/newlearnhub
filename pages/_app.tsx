import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'




function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className='text-white text-lg body'>
      
      <Header/>
    
        <Component  {...pageProps} />
   
      <Footer/>  
    </div>
  )
  
 
}

export default MyApp
