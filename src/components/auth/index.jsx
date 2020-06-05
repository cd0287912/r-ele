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
        this.props.history.push('/admin/login')
        return;
      }
      const userInfo = store.getState().user.userInfo;
      if(!userInfo){
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

