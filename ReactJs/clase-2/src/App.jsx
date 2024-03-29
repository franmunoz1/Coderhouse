import './App.css';
import { Usuario } from './components/Usuario/Usuario';
import { Card } from './components/Card/Card';
import { Example } from './components/Navbar/Navbar';
import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';
import Avatar from './components/Avatar/Avatar';
import RefBasic from './components/RefBasic/RefBasic';
import Search from './components/Search/Search';
import UsesComponent from './components/UsesComponent/UsesComponent';
import ProductCard from './components/ProductCard';
import TaskList from './components/TaskList/TaskList';
import ApiMeli from './components/ApiMeli/ApiMeli';
import CalculadorComponente from './components/CalculadorComponente/CalculadorComponente';
import PadreComponente from './components/PadreComponente/PadreComponente';

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

  const tasks = [
    {
      id: 1,
      task: 'Estudiar'
    },
    {
      id: 2,
      task: 'Comer'
    },
    {
      id: 3,
      task: 'Tomar'
    },
    {
      id: 4,
      task: 'Jugar'
    },
  ];

  return (

    <>
      <Example />
      <ProductCard id={2} imageURL='data:image/jpeg;base64,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' name='daad' category='daad' description='dada' price={312} />
      <h1 className='titulo'>Hola mundo!</h1>
      <img style={estilos} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="" />
      <Usuario nombre="Francisco" edad={23} />
      <Usuario nombre="Maria" edad={20} />
      <Card title={'User'} >
        <Avatar />
      </Card>
      <h1>Clase 4</h1>
      <ButtonComponent texto={caracteristicas[0].texto} color={caracteristicas[0].color} callback={dispararConsola} />
      <ButtonComponent texto={caracteristicas[1].texto} color={caracteristicas[1].color} callback={dispararConsola} />
      <ButtonComponent texto={caracteristicas[2].texto} color={caracteristicas[2].color} callback={dispararConsola} />
      <CounterComponent />
      <RefBasic />
      <Search />
      <UsesComponent />
      <TaskList tareas={tasks} />
      <ApiMeli />
      <CalculadorComponente />
      <PadreComponente>
        <p>No olvides suscribirte al canal</p>
        <button>Pulsar</button>
      </PadreComponente>
    </>
  )
}


export default App
