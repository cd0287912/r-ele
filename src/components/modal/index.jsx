import React from "react"
import styled from "./modal.module.scss"
import Button from './../button'


function Modal(porps){
  const {title="标题", children, visible, onOk, onCancel,width='520px'} = porps
  return (
    <>
    {
      visible ?
      (<div className={styled['modal-wrap']}>
        <div className={styled['modal-mask']}>
          <div style={{width}} className={styled['modal-container']}>
            <div onClick={onCancel} className={styled['modal-close']}>
              <i className="iconfont icon--close"></i>
            </div>
            <div className={styled["modal-header"]}>
              {title}
            </div>
            <div className={styled["modal-content"]}>
              {children}
            </div>
            <div className={styled["modal-footer"]}>
              <Button onClick={onCancel}>取消</Button>
              <Button onClick={onOk} type="primary">确定</Button>
            </div>
          </div>
        </div>
      </div>) : null
    }
    </>
  )
}
export default Modal