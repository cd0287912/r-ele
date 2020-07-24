import React from 'react'
import styled from './panel.module.scss'
function Panel(props){
  const {url,label,title} = props.item;
  return (
    <div className={styled.panel}>
      <img src={url} alt="img"/>
      <h3>{title}</h3>
      <p>{label}</p>
    </div>
  )
}

export default Panel
