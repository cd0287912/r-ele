import {SAVEUSERINFO} from "./action"
const defaultState = {
  userInfo:null
}


const saveUserInfo = (state, payload) => {
  return Object.assign({}, {...state}, {
    userInfo: payload
  })
}


const userReducer = (state = defaultState, action) => {
  switch(action.type){
    case SAVEUSERINFO:
      return saveUserInfo(state, action.payload)
    default:
      return state
  }
}

export default userReducer