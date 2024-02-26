import './App.css';
import { Usuario } from './components/Usuario/Usuario';
import { Card } from './components/Card/Card';
import { Example } from './components/Navbar/Navbar';
import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';


function App() {

  const estilos = {
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    border: '5px solid black',
    margin: '10px'
  }

  const caracteristicas = [
    {
      color: 'red',
      texto: 'contacto'
    },
    {
      color: 'blue',
      texto: 'producto'
    },
    {
      color: 'green',
      texto: 'nosotros'
    }
  ];

  const dispararConsola = () => {
    console.log('Hola alumnos')
  }

  return (

    <>
      <Example />
      <h1 className='titulo'>Hola mundo!</h1>
      <img style={estilos} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="" />
      <Usuario nombre="Francisco" edad={23} />
      <Usuario nombre="Maria" edad={20} />
      <Card />
      <h1>Clase 4</h1>
      <ButtonComponent texto={caracteristicas[0].texto} color={caracteristicas[0].color} callback={dispararConsola} />
      <ButtonComponent texto={caracteristicas[1].texto} color={caracteristicas[1].color} callback={dispararConsola} />
      <ButtonComponent texto={caracteristicas[2].texto} color={caracteristicas[2].color} callback={dispararConsola} />
      <CounterComponent />
    </>
  )
}


export default App
