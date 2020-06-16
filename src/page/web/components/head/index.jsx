import React,{useEffect,useState,useRef} from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import classNames from 'classnames'
import logo from "./../../../../assets/image/panda.svg"
import styled from "./head.module.scss"
import { Row, Col } from 'antd';
import './../../../../assets/lib/headerScroll'
const LINKLIST = [
  {
    path:'/home',
    txt:'主页'
  },
  {
    path:'/guide',
    txt:'足迹'
  },
  {
    path:'/life',
    txt:'生活'
  }
]


function Head(props){
  const logoRef = useRef()
  const {location,history} = props
  const pathname = location.pathname
  const handle2path = (item) => {
    history.push(item.path)
  }
  const [linkLists, setLinks] = useState([])
  useEffect(() => {
    setLinks(LINKLIST)
    window.initHeaderScorll(document.getElementById('webHeader'))
  }, [])

  const clickLogo = e => {
    logoRef.current = e.target
    e.target.classList.add('animate__animated');
    e.target.classList.add('animate__wobble');
    setTimeout(() => {
      logoRef.current.classList.remove('animate__animated');
      logoRef.current.classList.remove('animate__wobble');
    },1000)
  }

  if(pathname === '/'){
    return (<Redirect to='/home'/>)
  }
  return (
    <div id="webHeader" className={styled.head}>
      <Row>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <div className={styled['logo-container']}>
            <img ref={logoRef} onClick={clickLogo} src={logo} alt="logo"/>
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