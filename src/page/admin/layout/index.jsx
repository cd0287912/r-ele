import React from 'react'
import { connect } from "react-redux"
import styled from "./layout.module.scss"
import logo from "./../../../assets/image/panda.svg"
import { Avatar,Tooltip } from 'antd';
import {renderRoutes} from 'react-router-config'
import {removeStorage} from "./../../../utlis/store"
import Nav from "./nav"
const {baseURL} = require('./../../../config')

function Layout(porps){
  const {route,userInfo} = porps
  // 退出登录
  const handleExit = () => {
    removeStorage("TOKEN")
    window.location.reload()
  }
  return (
    <div className={styled.layout}>
      <div className={styled.nav}>
        <div className={styled.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <Nav/>
      </div>
      <div className={styled.container}>
        <header>
          {
            userInfo.avatar ? (<Avatar size={40} src={baseURL + userInfo.avatar} />):null
          }
          <Tooltip color={'#606266'} placement="topLeft" title='退出'>
            <i onClick={handleExit} className="iconfont icon-guanji"></i>
          </Tooltip>
        </header>
        <main>
          {
            renderRoutes(route.routes)
          }
        </main>
      </div>
    </div>
  )
}


const mapStateToProps =  state => ({
  userInfo: state.user.userInfo
})

const mapDispatchToPorps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToPorps)(Layout)