import instance from "./../utlis/request"
const rootUrl = '/admin/user'
/* 登录 */
export const login = data => {
  return instance({
    url: rootUrl + '/login',
    method:'post',
    data
  })
}

export const checkUserIsExit = data => {
  return instance({
    url: rootUrl + '/checkUserIsExit',
    method:'post',
    data
  })
}

export const getUserInfo = () => {
  return instance({
    url: rootUrl + '/getUserInfo',
    method:'get'
  })
}

export const register = data => {
  return instance({
    url: rootUrl + '/register',
    method:'post',
    data
  })
}

