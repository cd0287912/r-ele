import React from 'react'
import styled from './index.module.scss'
function Panel(props){
  const {url,label,title} = props.item
  return (
    <div className={styled.panel}>
      <img src={url} alt=""/>
      <h3>{title}</h3>
      <p>{label}</p>
    </div>
  )
}

export default Panel
