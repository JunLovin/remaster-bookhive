import Header from '@components/Header'
import Body from '@components/Body'
import { ApiProvider } from '@context/ApiProvider'
import '@styles/App.css'
import Footer from '@components/Footer'

function App() {
  return (
    <>
    <ApiProvider>
      <Header/>
      <Body/>
      <Footer/>
    </ApiProvider>
    </>
  )
}

export default App
