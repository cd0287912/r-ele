import React from 'react'
import { renderRoutes } from "react-router-config"
import WebHead from "./../components/head"
const style = {
  paddingTop: "80px"
}
function WebLayout({route}){
  return (
    <>
      <WebHead/>
      <div style={style}>
        {renderRoutes(route.routes)}
      </div>
    </>
  )
}

export default WebLayout