import React from 'react'
import styled from './publish.module.scss'
import MyEditor from './editor'
class Publish extends React.Component {
  render() {
    return (
      <div className={styled.publish}>
        <h3>开始写文章</h3>
        <div className={styled['editor-container']}>
          <MyEditor/>
        </div>
      </div>
    );
  }
}
export default Publish