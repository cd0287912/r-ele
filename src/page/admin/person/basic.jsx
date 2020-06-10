import React,{useState,useEffect,useCallback,useRef} from "react"
import { message } from 'antd'
import styled from "./basic.module.scss"
import Button from "./../../../components/button"
import Input from "./../../../components/input"
import {connect} from "react-redux"
import {actionBasicInfo} from "./../../../store/module/user/action"
import {getBase64} from "./../../../utlis"
import {uploadAvatar, updateUserInfo} from "./../../../api/admin"
const { baseURL } = require('./../../../config')
function Basic(props){
  const {apiGetBasicInfo} = props
  const inputFileRef = useRef()
  const targetFileRef = useRef()
  const [userInfo, setUserInfo] = useState({userName:'', phone:'', avatar:''})
  
  const getBasicInfo = useCallback(() => {
    apiGetBasicInfo().then(res => {
      setUserInfo({
        userName: res.userName,
        phone: res.phone,
        avatar: baseURL + res.avatar
      })
    })
  },[apiGetBasicInfo])

  useEffect(() => {
    getBasicInfo()
  }, [getBasicInfo])
  
  const handleChangeUerName = (e) => {
    setUserInfo({
      ...userInfo,
      userName: e.target.value
    })
  }
  const handleChangePhone = (e) => {
    setUserInfo({
      ...userInfo,
      phone: e.target.value
    })
  }
  const handleUpdate = () => {
    if(targetFileRef.current){
      const form = new FormData()
      form.append('file', targetFileRef.current)
      uploadAvatar(form).then(res => {
        if(res.code === 0){
          targetFileRef.current = ''
          const avatar = res.data.url
          onUpdateUserInfo(avatar)
        }
      })
    }else{
      onUpdateUserInfo()
    }
  }

  const onUpdateUserInfo = avatar => {
    updateUserInfo({
      avatar:avatar ? avatar : userInfo.avatar.replace(baseURL, ''),
      userName: userInfo.userName,
      phone: userInfo.phone
    }).then(res => {
      if(res.code === 0){
        getBasicInfo()
        message.success('更新成功');
      }
    })
  }

  const handleTriggerUpload = () => {
    inputFileRef.current.click()
  }
  const upload = e => {
    const targetFile = e.target.files[0]
    targetFileRef.current = targetFile
    getBase64(targetFile).then(data => {
      setUserInfo({
        ...userInfo,
        avatar: data
      })
    })
  }
  return (
    <div className={styled.form}>
      <div className={styled.formItem}>
        <span className={styled.formItemLable}>头像:</span>
        <div className={styled['avatar-container']}>
          <span>
            <img src={userInfo.avatar} alt="avatar"/>
            <div onClick={handleTriggerUpload} className={styled['icon-wrap']}>
              <i className="iconfont icon-bianji"></i>
            </div>
          </span>
          <input onChange={upload} ref={inputFileRef} type="file"/>
        </div>
      </div>
      <div className={styled.formItem}>
        <Input value={userInfo.userName}  onChange={handleChangeUerName} type = "text" label = "用户名" />
      </div>
      <div className={styled.formItem}>
        <Input value={userInfo.phone}  onChange={handleChangePhone} type = "text" label = "电&nbsp;&nbsp;&nbsp;话" />
      </div>
      <div className={styled.formItem}>
        <Button onClick={handleUpdate} type="primary">更 新</Button>
      </div>
  </div>
  )
}
const mapDispatchToProps = dispatch => ({
  apiGetBasicInfo:() => dispatch(actionBasicInfo())
})
export default connect(null, mapDispatchToProps)(Basic)