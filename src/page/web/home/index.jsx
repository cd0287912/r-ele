import React from 'react'
import styled from "./home.module.scss"
import {Row, Col} from "antd"
import js_gif from './../../../assets/image/js.gif'
function Home(props){
  // console.log(props);
  // const params = new URLSearchParams(props.location.search)
  // console.log(params.get('name'));
  
  
  return (
    <div className={styled.home}>
      <div className={styled.banner}>
        <img src={js_gif} alt="javascript"/>
      </div>
      <div>
        <Row>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>1</Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>2</Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>3</Col>
        </Row>
      </div>
    </div>
  )
}

export default Home