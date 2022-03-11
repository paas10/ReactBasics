import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  console.log(userInfo)

  return (
    <div>
      <button onClick={() => saludarFn(userInfo.name)}>Saludar</button>
    </div>
  )
}