import React from "react"
import styled from './nav.module.scss'
import NavItem from "./navItem"
const navList = [
  // {
  //   url:'/admin/dashboard',
  //   label:'首页',
  //   icon:'icon-dashboard'
  // },
  {
    url:'/admin/pages',
    label:'文章',
    icon:'icon-wenzhang1'
  },
  {
    url:'/admin/publish',
    label:'发布&编辑',
    icon:'icon-fabu'
  },
  {
    url:'/admin/classify',
    label:'分类',
    icon:'icon-biaoqian'
  },
  // {
  //   url:'/admin/auth',
  //   label:'权限',
  //   icon:'icon-dashboard'
  // },
  // {
  //   url:'/admin/person',
  //   label:'个人中心',
  //   icon:'icon-gerenzhongxin'
  // }
]
function Nav(props){
  return (
    <ul className={styled.nav}>
      {
        navList.map(item => (<NavItem item={item} key={item.url} />))
      }
    </ul>
  )
}


export default Nav
