import React from 'react'
// import { Card } from 'antd';
import svg from "./../../../../../assets/image/pi-layouts.svg"
import styled from './index.module.scss'
function Panel(props){
  return (
    <div className={styled.panel}>
      <img src={svg} alt=""/>
      <h3>Multiple Layouts</h3>
      <p>Select your own layout for a better browsing experience</p>
    </div>
  )
}

export default Panel

/* 

    <Card
      hoverable
      bordered={false}
      >
      <img src={svg} alt=""/>
      <div>21</div>
    </Card>

*/