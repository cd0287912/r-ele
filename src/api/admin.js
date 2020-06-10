import instance from "./../utlis/request"

/* 登录 */
const user = '/admin/user'
export const login = data => {
  return instance({
    url: user + '/login',
    method:'post',
    data
  })
}

export const checkUserIsExit = data => {
  return instance({
    url: user + '/checkUserIsExit',
    method:'post',
    data
  })
}

export const getUserInfo = () => {
  return instance({
    url: user + '/getUserInfo',
    method:'get'
  })
}

export const register = data => {
  return instance({
    url: user + '/register',
    method:'post',
    data
  })
}

// 个人中心
const person = '/admin/person'
export const getBasicInfo = () => {
  return instance({
    url: person + '/getBasicInfo',
    method:'get'
  })
}

// 上传头像
export const uploadAvatar = data => {
  return instance({
    url:  person + "/uploadAvatar",
    method:'post',
    data
  })
}
export const updateUserInfo = data => {
  return instance({
    url:  person + "/updateUserInfo",
    method:'post',
    data
  })
}
export const updatePassWord = data => {
  return instance({
    url:  person + "/updatePassWord",
    method:'post',
    data
  })
}