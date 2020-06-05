import React,{useEffect,useState} from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import classNames from 'classnames'
import logo from "./../../assets/image/panda.svg"
import styled from "./head.module.scss"
import { Row, Col } from 'antd';

const LINKLIST = [
  {
    path:'/home',
    txt:'主页'
  },
  {
    path:'/zxc',
    txt:'足迹👣'
  },
  {
    path:'/life',
    txt:'生活'
  }
]


function Head(props){
  const {location,history} = props
  const pathname = location.pathname
  const handle2path = (item) => {
    history.push(item.path)
  }
  const [linkLists, setLinks] = useState([])
  useEffect(() => {
    setLinks(LINKLIST)
  }, [])
  if(pathname === '/'){
    return (<Redirect to='/home'/>)
  }
  return (
    <div className={styled.head}>
      <Row>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <div className={styled['logo-container']}>
            <img src={logo} alt="logo"/>
            <h1>忘不了oh</h1>
          </div>
        </Col>
        <Col xs={0} sm={16} md={16} lg={16} xl={16}>
          <ul className={styled.nav}>
            {
              linkLists.map(item =>(
              <li 
                className={classNames({active: pathname === item.path})}
                onClick={() => handle2path(item)}
                key={item.path}>
                {item.txt}
              </li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(Head)