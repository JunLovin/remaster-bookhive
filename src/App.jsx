import Header from '@components/Header'
import Body from '@components/Body'
import { ApiProvider } from '@context/ApiProvider'
import '@styles/App.css'

function App() {
  return (
    <>
    <ApiProvider>
      <Header/>
      <Body/>
    </ApiProvider>
    </>
  )
}

export default App
