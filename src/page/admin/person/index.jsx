import React,{useState} from 'react'
import styled from './person.module.scss'
import Baisc from "./basic"
import Safe from './safe'
function Person(){
  const [tabKey, setTabKey] = useState(0)
  return (
    <div className={styled.person}>
      <div className={styled.container}>
        <div className={styled.navTabs}>
          <ul>
            <li onClick={() => setTabKey(0)}>基础设置</li>
            <li onClick={() => setTabKey(1)}>安全设置</li>
          </ul>
          <div style={{left:tabKey * 84 + 'px'}} className={styled.navTabsLine}></div>
        </div>
        <div className={styled.main}>
          {
            tabKey === 0 ? <Baisc/> : <Safe/>
          }
        </div>
      </div>
    </div>
  )
}
export default Person