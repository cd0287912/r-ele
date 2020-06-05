import React from 'react'
import styled from "./dashboard.module.scss"
import {Row,Col,Card} from "antd"
import Technology from "./components/technology"
import Plane from "./components/plane"
import Dynamic from "./components/dynamic"
function Aashboard(){
  return (
    <div className={styled.dashbosadard}>

      <div className={styled["top-headers"]}>
        <h3>工作台</h3>
        <div className={styled["top-headers-info"]}>
          <div className={styled['info-avatar-container']}>
            <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" />
          </div>
          <div className={styled['info-user']}>
            <p>早安，Serati Ma，祝你开心每一天！</p>
            <span>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
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
export default Aashboard