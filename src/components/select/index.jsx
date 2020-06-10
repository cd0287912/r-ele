import React from 'react'
import styled from './select.module.scss'

function Select(props){
  const {placeholder,value, onChange} = props
  const change = e => {
    onChange(e.target.dataset)
  }
  return (
    <div className={styled.select}>
      <input value={value.label || ''} placeholder={placeholder} readOnly  type="text"/>
      <span className={styled['icon-container']}>
        <i className='iconfont icon--arrow-down-copy'></i>
      </span>
      <div className={styled['drop-list-container']}>
        <div className={styled.arrow}></div>
        <ul onMouseDown={change}  className={styled['drop-down-main']}>
          { props.children }
        </ul>
      </div>
    </div>
  )
}

Select.Option = props => {
  const {label,value} = props
  return (
    <li data-value={value} data-label={label}>{label}</li>
  )
}

export default Select