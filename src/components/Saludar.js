import React, { useState, useEffect } from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { name = "Anónimo", age } = userInfo
  // console.log(userInfo)

  // Hook de estado <<useState>>
  const [stateCar, setStateCar] = useState(false);

  useEffect(() => {
    // ...
    console.log('useEffect')
    // ...
  }, [stateCar])

  return (
    <div>
      <button onClick={() => saludarFn(name, age)}>Saludar</button>

      <hr></hr><br></br>

      <h2>El coche está: {stateCar ? 'Encendido' : 'Apagado'}</h2>
      <button onClick={() => {setStateCar(prevValue => !prevValue)}}>
        {stateCar ? 'Apagar' : 'Encender'}
      </button>

    </div>
  )
}