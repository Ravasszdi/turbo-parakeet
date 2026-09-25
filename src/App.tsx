import Galeria from './components/Galeria'
import './App.css'
import { ORSZAGOK } from './adat'

function App() {

  return (
    <>
    <Galeria Kep_Lista={ORSZAGOK}></Galeria>
    </>
  )
}

export default App
