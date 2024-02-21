import './App.css'

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
      <h1 className='titulo'>Hola mundo!</h1>
      <img style={estilos} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="" />
    </>
  )
}

export default App
