import AuthProvider from '../components/context/AuthProvider'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />)
  }
  return (
     <>
      <AuthProvider>
        <Navbar/>
          <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
     </>
  )
}

export default MyApp
