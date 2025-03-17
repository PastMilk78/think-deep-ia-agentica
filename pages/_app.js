import '../styles/globals.css'
import AIChat from '../components/AIChat'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AIChat />
    </>
  )
}

export default MyApp 