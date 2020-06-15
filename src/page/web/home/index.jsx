import React from 'react'
import styled from "./home.module.scss"
import {Row, Col} from "antd"
import js_gif from './../../../assets/image/js.gif'

import Panel from './component/panel'
function Home(props){
  return (
    <div className={styled.home}>

      <div className={styled.banner}>
        <img src={js_gif} alt="javascript"/>
      </div>

      <div className={styled.lists}>
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Panel/>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}><Panel/></Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}><Panel/></Col>
        </Row>
      </div>

    </div>
  )
}

export default Home