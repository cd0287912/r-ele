import React from 'react'
import styled from './guide.module.scss'
import Artical from './../components/artical'
import { BackTop,Pagination } from 'antd';
import Footer from "../components/footer";
function Guide(props){
  return (
    <div className={styled.guide}>
      <main className={styled.main}>
        <Artical/>
        <Artical/>
        <Artical/>
        <Artical/>
        <Artical/>
      </main>
      <div className={styled['pagination-container']}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <Footer/>
      <BackTop />
    </div>
  )
}

export default Guide
