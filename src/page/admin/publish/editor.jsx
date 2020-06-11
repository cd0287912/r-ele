import React, { Component } from 'react'
import styled from './editor.module.scss'
import {Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css';



class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }
  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
  render(){
    return (
      <div className={styled.editor}>
        <div className={styled['editor-control']}>control</div>
        <div className={styled['editor-main']}>
          <Editor
            placeholder={'Write what you would say.'}
            ref={element => { this.editor = element }}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
export default MyEditor