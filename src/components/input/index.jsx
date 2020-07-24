import React,{ forwardRef } from "react"
import styled from "./input.module.scss"

const Input =  forwardRef((props,ref) => {
  const {label, ...prop} = props;
  return (
    <label className={styled['input-wrap']}>
      {label ? label + ':' : ''}
      <input ref={ref} {...prop}/>
    </label>
  )
});

export default Input
