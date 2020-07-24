import React,{useRef,useState,useEffect} from 'react'
import styled from './classify.module.scss'
import Button from './../../../components/button'
import { Table,message,Pagination } from 'antd'
import { addType, getTypeList } from './../../../api/admin'
import Input from './../../../components/input'
import Modal from "./../../../components/modal"

const columns = [
  {
    title: '标题',
    dataIndex: 'type_name',
    key: 'name'
  },
  {
    title: '简介',
    dataIndex: 'type_desc',
    align:'center',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    align:'center',
    width:300,
    render: (text, record) => (
      <span>
        <Button type='primary'>编辑</Button>
        <Button>删除</Button>
      </span>
    ),
  },
];


function Classify(){
  const [showModal,setModal] = useState(false)
  const [pagination, setpagination] = useState({pageNo:1,pageSize:5})
  const [listTotal,setTotal] = useState(0)
  const [list,setList] = useState([])
  const titleRef = useRef()
  const descRef = useRef()
  useEffect(() => {
    const {pageNo,pageSize} = pagination
    const params = {pageNo,pageSize}
    getTypeList(params).then(res => {
      if(res.code === 0){
        const {list, total} = res.data;
        list.map(item => item.key = item.type_id)
        setList(list)
        setTotal(total)
      }
    })
  },[pagination])
  const handleAddType = () => {
    setModal(true)
  }

  const handleCancel = () => {
    setModal(false)
  }
  const handleSubmit = () => {
    const title = titleRef.current.value
    const desc = descRef.current.value
    if(!title) return;
    addType({title,desc}).then(res => {
      if(res.code === 0){
        message.success("添加成功")
        setModal(false)
      }
    })
  }

  function onChange(pageNo){
    setpagination({...pagination,pageNo})
  }

  return (
    <div className={styled.classify}>
      <div className={styled.container}>
        <h3>分类</h3>
        <div className={styled.content}>
          <Button onClick={handleAddType} type='primary'>
            <i className='iconfont icon--add'></i>
            添加分类
          </Button>
          <div className={styled.main}>
            <Table
              columns={columns}
              pagination={false}
              dataSource={list}
            />
          </div>
          <div className={styled.pagination}>
            <Pagination 
               onChange={onChange} 
               defaultCurrent={pagination.pageNo} 
               defaultPageSize={pagination.pageSize}
               total={listTotal} />
          </div>
        </div>
      </div>

    <Modal 
      title="添加分类"
      visible={showModal}
      onOk={handleSubmit}
      onCancel={handleCancel}
      >
      <Input ref={titleRef} label="标题" />
      <Input ref={descRef} label="描述" />
    </Modal>


    </div>
  )
}


export default Classify

