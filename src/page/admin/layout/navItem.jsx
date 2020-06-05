import React from "react"
import styled from './navItem.module.scss'
import classNames from 'classnames'
import {withRouter} from 'react-router-dom'
import Icon from "./../../../icon"
function NavItem(props){
  const {item, location, history} = props
  const path = location.pathname;
  const handle2Target = () => {
    history.push(item.url)
  }
  return (
    <li onClick={handle2Target} className={classNames(styled.item, {active: item.url === path})}>
      <i className={classNames('iconfont',item.icon)}></i>
      <span className={styled.label}>{item.label}</span>
    </li>
  )
}


export default withRouter(NavItem)