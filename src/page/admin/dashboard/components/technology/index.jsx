import React from 'react'
import {Card} from "antd"
import styled from "./technology.module.scss"
const gridStyle = {
  width: '25%'
};

function Technology(){
  return (
    <Card style={{marginBottom:20}} title="技术栈">
      <Card.Grid style={gridStyle}>
        <div className={styled.item}>
          <span title="react">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" alt="" />
          </span>
        </div>
      </Card.Grid>
  </Card>
  )
}

export default Technology