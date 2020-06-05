
import { checkUserIsExit,login,getUserInfo,register } from "./../../../api/admin"
import { setStorage } from "./../../../utlis/store"
export const SAVEUSERINFO = "saveUserInfo"

export const actionCheckHasUser = userName => dispatch => {
  return checkUserIsExit({userName})
}

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

export const actionRegister = payload => dispatch => {
  return register(payload)
}

const saveUserInfo = payload => ({
  type: SAVEUSERINFO,
  payload
})

