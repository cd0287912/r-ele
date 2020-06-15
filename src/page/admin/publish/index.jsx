import React from 'react'
import styled from './publish.module.scss'
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'  //语法高亮
import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/vs.css';   // 配置高亮css
import Input from './../../../components/input'
import Select from './../../../components/select'
import Button from './../../../components/button'
/* 
  富文本编辑器 React Draft Wysiwyg
             SimpleMDE Markdown Editor
*/

const list = [
  {
    id:1,
    label:'vue'
  },
  {
    id:2,
    label:'react'
  },
]

class Publish extends React.Component {
  componentDidMount(){
    this.smde = new SimpleMDE({
      element: document.getElementById("editorId"),
      autofocus: true,
      autosave: true,
      placeholder: "Type here...",
      previewRender: function (plainText) {
          return marked(plainText, {
              renderer: new marked.Renderer(),
              gfm: true,
              pedantic: false,
              sanitize: false,
              tables: true,
              breaks: true,
              smartLists: true,
              smartypants: true,
              highlight: function (code) {
                return highlight.highlightAuto(code).value;
              }
          });
      },
   })
  }
  state = {
    selectValue:{}
  }
  handleChange = () => {

  }
  render() {
    const {selectValue} = this.state
    return (
      <div className={styled.publish}>
        <div className={styled['title-container']}>
          <Input label="标题" placeholder="请输入标题" />
        </div>
        <div className={styled['type-container']}>
          <label>分类:</label>
          <Select className={styled.selectWrap} 
                  value={selectValue} 
                  onChange={this.handleChange} 
                  placeholder="请选择文章分类">
              {
                list.map(item => 
                  <Select.Option
                    key={item.id} 
                    value={item.id} 
                    label={item.label}/>)
              }
          </Select>
        </div>
        <textarea id="editorId"></textarea>
        <Button type="primary">发布</Button>
      </div>
    );
  }
}
export default Publish