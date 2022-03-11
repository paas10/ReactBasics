// Importaciones (CSS, Imgs, etc)
import React from "react";

// Función que renderiza el componente
export default function HolaMundo() {

  const mifuncion = () => {
    console.log('Mi Función')
  }

  return(
    // Fragment: Etiqueta vacía para encapsular el contenido que se quiere retornar
    <>
      <h1>Hola Mundo</h1>
      <h2>Pablo Alvarado</h2>
    </>
  )
}

// Se exporta el componente
// export default HolaMundo;