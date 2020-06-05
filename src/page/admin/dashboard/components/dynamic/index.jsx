import React from "react"
import {Card,Timeline} from "antd"
// import styled from "./dynamic.module.scss"

function Dynamic(){
  return (
    <Card bodyStyle={{paddingTop:48}} style={{marginBottom:20}} title="时间线">
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </Card>
  )
}
export default Dynamic