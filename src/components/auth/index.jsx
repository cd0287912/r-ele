import React,{PureComponent} from 'react'
import { getStorage } from "./../../utlis/store"
import Error from "./../../components/error"
import store from "./../../store"
import { actionGetUserInfo } from "./../../store/module/user/action"

function Auth(Component){
  return class Target extends PureComponent{
    constructor(props){
      super(props)
      this.state = {
        error:0
      }
    }
    componentDidCatch(){
      this.setState({
        error: 1
      })
    }
    componentDidMount(){
      if(!getStorage("TOKEN")){
        // 不起作用？why
        const url = encodeURIComponent(window.location.href)
        this.props.history.replace('/admin/login?redirect=' + url)
        return;
      }
      const userName = store.getState().user.userInfo.userName;
      
      if(!userName){
        store.dispatch(actionGetUserInfo())
      }
    }
    render(){
      const { error } = this.state
      return (
        <>
        {
         error === 1 ? <Error/> :  <Component {...this.props}/>
        }
       </>
      )
    }
  }
}
export default Auth

