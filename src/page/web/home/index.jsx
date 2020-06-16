import React from 'react'
import styled from "./home.module.scss"
import {Row, Col} from "antd"
import js_gif from './../../../assets/image/js.gif'
import Footer from './../components/footer'
import Panel from './component/panel'
const list = [
  {
    id:1,
    url:require('./../../../assets/image/pi-layouts.svg'),
    label:'Save articles and images you want to see later.',
    title:'Bookmark'
  },
  {
    id:2,
    url:require('./../../../assets/image/pi-pandamarks.svg'),
    label:'Suffer from FOMO? With free unlimited feeds, fear no more.',
    title:'Unlimited Feeds'
  },
  {
    id:3,
    url:require('./../../../assets/image/pi-unlimited.svg'),
    label:'Select your own layout for a better browsing experience.',
    title:'Multiple Layouts'
  }
]
function Home(props){
  return (
    <div className={styled.home}>

      <div className={styled.banner}>
        <img src={js_gif} alt="javascript"/>
      </div>

      <div className={styled.lists}>
        <Row>
          {
            list.map(item => (
              <Col key={item.id} xs={24} sm={24} md={8} lg={8} xl={8}>
                <Panel item = {item}/>
              </Col>
            ))
          }
        </Row>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home