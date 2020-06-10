import React,{ forwardRef } from "react"
import styled from "./input.module.scss"

// function Input(props){
//   const {label, ...prop} = props
//   return (
//     <label className={styled['input-wrap']}>
//       {label}:
//       <input {...prop}/>
//     </label>
//   )
// }

const Input =  forwardRef((props,ref) => {
  const {label, ...prop} = props
  return (
    <label className={styled['input-wrap']}>
      {label ? label + ':' : ''}
      <input ref={ref} {...prop}/>
    </label>
  )
})

export default Input