import React, {useEffect, useState, useRef} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import classNames from 'classnames'
import {Transition} from "react-transition-group"
import logo from "./../../../../assets/image/panda.svg"
import styled from "./head.module.scss"
import {Row, Col} from 'antd';
const LINKLIST = [
  {
    path: '/home',
    txt: '主页'
  },
  {
    path: '/page',
    txt: '点滴'
  },
  {
    path: '/readme',
    txt: 'README'
  },
];


const transitionStyles = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
};

function Head(props) {
  const [inProp, setInProp] = useState(false);
  const logoRef = useRef();
  const {location, history} = props;
  const pathname = location.pathname;
  const handle2path = (item) => {
    setInProp(false);
    history.push(item.path)
  };
  const [linkLists, setLinks] = useState([]);
  useEffect(() => {
    setLinks(LINKLIST)
  }, []);
  useEffect(() => {
    document.addEventListener('click',clickBody,false);
    return () => {
      document.removeEventListener('click',clickBody,false)
    }
  }, []);
  const clickBody = e => {
    if(!e.target.contains(document.getElementById('menuIcon'))){
      setInProp(false);
    }
  };
  const clickLogo = e => {
    logoRef.current = e.target;
    e.target.classList.add('animate__animated');
    e.target.classList.add('animate__wobble');
    setTimeout(() => {
      logoRef.current.classList.remove('animate__animated');
      logoRef.current.classList.remove('animate__wobble');
    }, 1000)
  };
  const click = e => {
    e.stopPropagation();
    setInProp(!inProp)
  };

  if (pathname === '/') {
    return (<Redirect to='/home'/>)
  }
  return (
    <div className={styled.head}>
      <Row>
        <Col xs={2} sm={2} md={2} lg={0} xl={0}>
        </Col>
        <Col xs={20} sm={20} md={20} lg={8} xl={8}>
          <div className={styled['logo-container']}>
            <img ref={logoRef} onClick={clickLogo} src={logo} alt="logo"/>
            <h1>忘不了oh</h1>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={16} xl={16}>
          <ul className={styled.nav}>
            {
              linkLists.map(item => (
                <li className={classNames({active: pathname === item.path})}
                    onClick={() => handle2path(item)} key={item.path}>
                  {item.txt}
                </li>
              ))
            }
          </ul>
        </Col>
        <Col xs={2} sm={2} md={2} lg={0} xl={0}>
          <div onClick={click} className={styled['nav-icon-container']}>
            <i id="menuIcon" className="iconfont icon-menu"/>
          </div>
        </Col>
      </Row>
      <Transition in={inProp} timeout={200}>
        {
          state => (
            <ul className={styled['small-nav']}
                style={{...transitionStyles[state]}}>
              {
                linkLists.map(item => (
                  <li className={classNames({active: pathname === item.path})}
                      onClick={() => handle2path(item)} key={item.path}>
                    {item.txt}
                  </li>
                ))
              }
            </ul>
          )
        }
      </Transition>
    </div>
  )
}

export default withRouter(Head)
