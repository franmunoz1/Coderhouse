import './App.css';
import { Usuario } from './components/Usuario/Usuario';
import { Card } from './components/Card/Card';
import { Example } from './components/Navbar/Navbar'

function App() {

  const estilos = {
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    border: '5px solid black',
    margin: '10px'
  }

  return (

    <>
      <Example />
      <h1 className='titulo'>Hola mundo!</h1>
      <img style={estilos} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="" />
      <Usuario nombre="Francisco" edad={23} />
      <Usuario nombre="Maria" edad={20} />
      <Card />
    </>
  )
}


export default App
