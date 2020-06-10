import React from 'react'
import styled from "./dashboard.module.scss"
import {Row,Col} from "antd"
import Technology from "./components/technology"
import Plane from "./components/plane"
import Dynamic from "./components/dynamic"
import {connect} from 'react-redux'
const {baseURL} = require('./../../../config')
function Aashboard({userInfo}){
  return (
    <div className={styled.dashbosadard}>

      <div className={styled["top-headers"]}>
        <h3>工作台</h3>
        <div className={styled["top-headers-info"]}>
          <div className={styled['info-avatar-container']}>
            <img src={baseURL+userInfo.avatar} alt="" />
          </div>
          <div className={styled['info-user']}>
            <p>{userInfo.userName}，祝你开心每一天！</p>
            <span>联系方式: {userInfo.phone ? userInfo.phone : '暂无'}</span>
          </div>
        </div>
      </div>

      <div className={styled.container}>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={24} xl={16}>
            <Technology/>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Row gutter={20}>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <Plane/>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <Dynamic/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
})
export default connect(mapStateToProps,null)(Aashboard)