import React,{useState} from 'react'
import styled from './page.module.scss'
import Button from './../../../components/button'
import Input from './../../../components/input'
import Select from './../../../components/select'
import { Table, Tag } from 'antd'

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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: '文章标题',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '作者',
    dataIndex: 'age',
    key: 'age',
    align:'center',
    width:100,
  },
  {
    title: '简介',
    dataIndex: 'address',
    align:'center',
    key: 'address',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    align:'center',
    width:200,
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    align:'center',
    width:300,
    render: (text, record) => (
      <span>
        <Button type='primary'>预览</Button>
        <Button type='primary'>编辑</Button>
        <Button>删除</Button>
      </span>
    ),
  },
];


function Page(){
  const [selectValue, setSelectValue] = useState({})
  const handleChange = item => {
    setSelectValue(item)
  }
  return (
    <div className={styled.page}>
      <div className={styled.container}>
        <h3>文章列表</h3>
        <div className={styled.content}>
          <div className={styled.control}>
            <div className={styled.add}>
              <Button type='primary'>
                <i className='iconfont icon--add'></i>
                发布文章
              </Button>
            </div>
            <div className={styled.search}>
              <div className={styled['input-container']}>
                <Input placeholder="请输入关键词搜索文章" />
              </div>
              <div className={styled['select-container']}>
                <Select value={selectValue} onChange={handleChange} placeholder="请选择文章分类">
                  <Select.Option value={''} label={'全部'}></Select.Option>
                  {
                    list.map(item => 
                      <Select.Option
                        key={item.id} 
                        value={item.id} 
                        label={item.label}/>)
                  }
                </Select>
              </div>
              <div className={styled['search-button']}>
                <Button type='primary'>搜索</Button>
              </div>
              <div className={styled['search-rest']}>
                <Button type='primary'>重置</Button>
              </div>
            </div>
          </div>
          <div className={styled.main}>
            <Table
            columns={columns}
            pagination={{ hideOnSinglePage:true,showQuickJumper:true,position: ['bottomCenter'] ,pageSize:6}}
            dataSource={data}
          />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Page

