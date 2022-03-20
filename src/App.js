import { ReactComponent as ReactIcon } from './assets/logo.svg'
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';
import React from 'react';

// Function Component
function Welcome(props) {
  return <h1>Hola { props.nombre } / Functional Component</h1>
}

// Class Component
class Bienvenido extends React.Component {
  render() {
    return <h1>Hola { this.props.nombre } / Class Component</h1>
  }
}

function App() {

  const user = { 
    name: 'Pablo Alvarado',
    age: 23,
    color: 'Azul'
  }

  const saludarFn = (name, age) => {
    console.log(`Hola ${name}, tiene ${age} años`)
  }

  return (
    <div className="App">
      <header className="App-header">

        <Welcome nombre='Pablo'/>
        <Bienvenido nombre='André'/>

        {/* <HolaMundo/>
        <AdiosMundo/> */}

        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <ReactIcon/>

      </header>
    </div>
  );
}

export default App;
