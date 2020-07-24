import React, {useState, useEffect, useRef} from "react"
import {message} from 'antd';
import {Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import styled from "./login.module.scss"
import icon from "./../../../assets/image/panda.svg"
import useNotice from "./../../../components/notice"
import {encrypt} from "./../../../utlis"
import {getStorage} from "./../../../utlis/store"
import {checkUserIsExit, register} from "./../../../api/admin"
import {actionLogin} from "./../../../store/module/user/action"

function Login(props) {

  const {apiLogin, history} = props;
  const usernameRef = useRef();
  const passworldRef = useRef();
  const passworldAgainRef = useRef();
  const [noticeTemp, setNotice] = useNotice({show: false, type: '', msg: ''});
  const [signType, setSignType] = useState('signIn');

  useEffect(() => {
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus()
    }
  }, []);
  if (getStorage("TOKEN")) {
    return (
      <Redirect to='/admin'/>
    )
  }
  // login
  const handleLoginOrUp = () => {
    const username = usernameRef.current.value.trim();
    const passworld = encrypt(passworldRef.current.value.trim());
    signType === 'signIn' ? login(username, passworld) : regisiter(username, passworld)
  };
  /* 登录逻辑 */
  const login = (username, passworld) => {
    if (!username || !passworld) {
      setNotice({
        show: true,
        type: 'info',
        msg: "请输入完整信息"
      });
      return false
    }
    const params = {userName: username, passWord: passworld};
    apiLogin(params).then(res => {
      if (res) {
        message.success('登录成功');
        setTimeout(() => {
          history.replace('/admin')
        }, 1000)
      }
      // 登录失败
      setNotice({
        show: true,
        type: 'error',
        msg: "密码错误"
      })
    })
  }
  /* 注册逻辑 */
  const regisiter = (username, passworld) => {
    const ischecked = document.querySelector("#user_agree_to_terms").checked;
    const passworldAgain = encrypt(passworldAgainRef.current.value.trim());
    if (username && passworld === passworldAgain && ischecked) {
      const params = {userName: username, passWord: passworld};
      register(params).then(res => {
        if (res.code === 0) {
          setNotice({
            show: true,
            type: 'success',
            msg: "注册成功"
          });
          setSignType('signIn')
        }
      });
      return
    }
    setNotice({
      show: true,
      type: 'error',
      msg: "请输入完整信息or两次输入的密码不同"
    })
  };
  /*
    检测用户是否存在
  */
  const inputUserBlur = () => {
    const username = usernameRef.current.value.trim();
    if (!username) return;
    checkUserIsExit({userName: username}).then(res => {
      if (res.code === -1 && signType === 'signIn') {
        setNotice({
          show: true,
          type: 'error',
          msg: res.message
        })
      }
      if (res.code === 0 && signType === 'signUp') {
        setNotice({
          show: true,
          type: 'error',
          msg: res.message
        })
      }

    })
  };

  return (
    <div className={styled.login}>
      {noticeTemp}
      <div className={styled.logo}>
        <h1>Discover the world’s top Designers &amp; Creatives.</h1>
      </div>
      <div className={styled.container}>
        <div className={styled.main}>
          <div className={styled.icon}>
            <img src={icon} alt="icon"/>
          </div>
          <form>
            <fieldset>
              <label>Username</label>
              <input onBlur={inputUserBlur} ref={usernameRef}
                     className={styled.input} type="text"/>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input ref={passworldRef} className={styled.input}
                     type="password"/>
            </fieldset>
            {
              signType === 'signUp' ?
                (
                  <>
                    <fieldset>
                      <label>Password</label>
                      <input ref={passworldAgainRef} className={styled.input}
                             type="password"/>
                    </fieldset>
                    <fieldset className={styled.agreeBox}>
                      <input id="user_agree_to_terms" type="checkbox"/>
                      <label htmlFor="user_agree_to_terms">Creating an account
                        means you’re okay with me</label>
                    </fieldset>
                  </>
                ) : ''
            }
            <input onClick={handleLoginOrUp} className={styled.button}
                   type="button"
                   value={signType === 'signIn' ? "Sign In" : "Create Account"}/>
            <a
              onClick={() => setSignType(signType === 'signIn' ? 'signUp' : 'signIn')}
              href="#!">
              {
                signType === 'signIn' ? "sign up" : "sign In"
              }
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDiapatchToProps = dispatch => ({
  apiLogin: payload => dispatch(actionLogin(payload))
});

export default connect(null, mapDiapatchToProps)(Login)
