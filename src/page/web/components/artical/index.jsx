import React from "react";
import {Tag, Space} from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import styled from './index.module.scss'

function Artical() {
  const handle2Target = () => {
    console.log(1);
  }
  return (
    <div className={styled.artical}>
      <div className={styled.time}>2020.07.20</div>
      <div className={styled.title}>文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
      <div className={styled.tags}>
        <Tag style={{marginBottom:7}} icon={<TwitterOutlined/>} color="#55acee">
          Twitter
        </Tag>
        <Tag style={{marginBottom:7}} icon={<YoutubeOutlined/>} color="#cd201f">
          Youtube
        </Tag>
        <Tag style={{marginBottom:7}} icon={<FacebookOutlined/>} color="#3b5999">
          Facebook
        </Tag>
        <Tag style={{marginBottom:7}} icon={<LinkedinOutlined/>} color="#55acee">
          LinkedIn
        </Tag>
      </div>
      <div className={styled.pic}>
        <img src="https://redspite.com/uploads/1587477767089.jpg" alt=""/>
      </div>
      <div className={styled.desc}>这个是文章的描述哈</div>

      <div className={styled.line}>
        <div onClick={handle2Target} className={styled.dot}></div>
      </div>
    </div>
  )
}

export default Artical
