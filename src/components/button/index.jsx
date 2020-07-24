import React from "react"
import classnames from 'classnames'
import styled from "./button.module.scss"
function Button(props){
  const {type = 'default',children} = props;
  return (
    <>
      <button onClick={props.onClick} className={classnames(styled[type], styled.button)}>
        {children}
      </button>
    </>
  )
}

export default Button
