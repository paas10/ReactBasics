import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { name = "Anónimo" } = userInfo
  console.log(userInfo)

  return (
    <div>
      <button onClick={() => saludarFn(name)}>Saludar</button>
    </div>
  )
}