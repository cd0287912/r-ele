import React,{useState,useRef} from 'react'
import styled from "./basic.module.scss"
import { updatePassWord } from "./../../../api/admin"
import { message } from 'antd'
import { encrypt } from "./../../../utlis"
import {removeStorage} from './../../../utlis/store'
import Modal from "./../../../components/modal"
import Button from "./../../../components/button"
import Input from "./../../../components/input"
function Safe(){
  const oldPassword = useRef()
  const new1Password = useRef()
  const new2Password = useRef()
  const [showModal, setShowModal] = useState(false)
  const handleOk = () => {
    const oldPassWord = oldPassword.current.value
    const newPassWord = new1Password.current.value
    const newPassWordRepeat = new2Password.current.value
    if(!oldPassWord || !newPassWord || !newPassWordRepeat){
      message.error('修改信息请填写完整')
      return
    }
    const params = {
      oldPassWord:encrypt(oldPassWord),
      newPassWord:encrypt(newPassWord),
      newPassWordRepeat:encrypt(newPassWordRepeat)
    }
    updatePassWord(params).then(res => {
      if(res.code === 0){
        message.success('修改成功')
        removeStorage("TOKEN")
        setShowModal(false)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }else{
        message.error('修改失败')
      }
    })
    
    
  }
  const handleCancel = () => {
    setShowModal(false)
  }
  return(
    <div className={styled.form}>
      <div className={styled.formItem}>
        <span className={styled.formItemLable}>密码</span>
        <div className={styled['password-container']}>
          ******
        </div>
      </div>
      <div className={styled.formItem}>
        <Button onClick={() => setShowModal(true)} type="primary">修改密码</Button>
      </div>
      <Modal
        visible = {showModal}
        onOk = {handleOk}
        onCancel = {handleCancel}
      >
        <Input ref = { oldPassword } type = "password" label = "原密码" />
        <Input ref = { new1Password } type = "password" label = "新密码" />
        <Input ref = { new2Password } type = "password" label = "新密码" />
      </Modal>
    </div>
  )
}

export default Safe