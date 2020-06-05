import React from 'react'
import { Card } from 'antd';
import svg from "./../../../../../assets/image/pi-layouts.svg"
function Panel(props){
  return (
    <Card
      hoverable
      >
      <img src={svg} alt=""/>
      <div>21</div>
    </Card>
  )
}

export default Panel