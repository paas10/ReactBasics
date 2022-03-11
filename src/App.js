import { ReactComponent as ReactIcon } from './assets/logo.svg'
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

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

        {/* <HolaMundo/>
        <AdiosMundo/> */}

        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <ReactIcon/>

      </header>
    </div>
  );
}

export default App;
