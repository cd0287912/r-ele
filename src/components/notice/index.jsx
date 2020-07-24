import React, {useState, useEffect, useRef} from 'react'
import {Transition} from 'react-transition-group'
import styled from "./notice.module.scss"
import classNames from 'classnames'
/*
  type:
  1:  success     #f0f9eb
  -1: error       #ff5555
  0:  info        #e6f7ff
*/
const defaultStyle = {
  transition: `all .3s`,
  opacity: 0,
  transform: 'translateY(-100%)'
};

const transitionStyles = {
  entering: {opacity: 1, transform: 'translateY(0)'},
  entered: {opacity: 1, transform: 'translateY(0)'},
  exiting: {opacity: 0, transform: 'translateY(-100%)'},
  exited: {opacity: 0, transform: 'translateY(-100%)'},
};

function useNotice(props) {
  const timer = useRef();
  const [noticeInfo, setNotice] = useState(props);
  const noticeTemp = (
    <Transition in={noticeInfo.show} timeout={300}>
      {
        state => (
          <div className={classNames(styled[noticeInfo.type], styled.notice)}
               style={{
                 ...defaultStyle,
                 ...transitionStyles[state]
               }}>
            <h2>{noticeInfo.msg}</h2>
          </div>
        )
      }
    </Transition>
  );
  useEffect(() => {
    timer.current = setTimeout(() => {
      setNotice({show: false, type: 1, msg: ''})
    }, 2000);
    return () => {
      clearTimeout(timer.current)
    }
  }, [noticeInfo]);
  return [noticeTemp, setNotice]
}

export default useNotice
