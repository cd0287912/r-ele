
import { login,getUserInfo,getBasicInfo } from "./../../../api/admin"
import { setStorage } from "./../../../utlis/store"
export const SAVEUSERINFO = "saveUserInfo"

export const actionLogin = payload => async dispatch => {
  const result = await login(payload)
  if(result.code === 0){
    const token = result.data.token || ''
    // 存入localStorage
    setStorage("TOKEN", token)
    return 1
  }
  return 0
}

export const actionGetUserInfo = () => async dispatch => {
  const result = await getUserInfo()
  const userInfo = result.data || {}
  dispatch(saveUserInfo(userInfo))
  return 1
}

const saveUserInfo = payload => ({
  type: SAVEUSERINFO,
  payload
})


// person
export const actionBasicInfo = () => async dispatch => {
  const result = await getBasicInfo()
  const userInfo = result.data || {}
  dispatch(saveUserInfo(userInfo))
  return userInfo
}

