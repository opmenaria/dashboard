import { Card, Col, Input, Row, Table, Space, Tag, Avatar, Image, Popover, Dropdown, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import type { MenuProps, TableProps } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { TbCube, TbDevicesDollar, TbUserSquareRounded } from "react-icons/tb";
import { IoIosArrowRoundUp } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiFileList3Line } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuBadgePercent, LuMenuSquare } from "react-icons/lu";
import { MdDelete, MdOutlineLiveHelp } from 'react-icons/md';

const Header=()=> {
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
    },
  ];
 

  const style: React.CSSProperties = { background: 'white', padding: '8px', marginBottom:'1.5em', borderRadius:'.5rem'};


  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    img:string;
  }
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (text) => <Avatar size={30} icon={text}/>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
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
        </>
      ),
    },
    {
      title: 'Delete',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <MdDelete style={{color:'red', cursor:'pointer'}} onClick={(eve)=>{
              console.log("first ", record)
              setTablRow(row=>row.filter(row => row.key !== record.key))
            }} size={22} />
        </Space>
      ),
    },
  ];
  
  
  const data2 =[
    { title:"Earning", icon:<GiTakeMyMoney size={70} />, earn:'$198K', rate:'37.8% This month', col:"red", fil:'#ffd5d5' },
    { title:"Orders", icon:<RiFileList3Line size={70} />, earn:'$198K', rate:'37.8% This month', col:"green", fil:'#cbffc7' },
    { title:"Balance", icon:<SlWallet size={70} />, earn:'$198K', rate:'37.8% This month' , col:"blue", fil:'#d8d5ff'},
    { title:"Total Sales", icon:<HiOutlineBriefcase size={70} />, earn:'$198K', rate:'37.8% This month', col:"#ffbc00", fil:'#f4ffb4' },
  ]
  const [tablRow, setTablRow]=useState(data)
  const [srchTab, setTrchTab]=useState("")
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  // const onSearch = (ev: React.ChangeEvent<HTMLInputElement>) => console.log("target", ev?.target?.value);
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTrchTab(ev.target.value)
  };
  useEffect(()=>{
    setTablRow(srchTab.length<1?data:data.filter((el, i)=>{
      return el.name.toLowerCase().includes(srchTab.toLowerCase()) 
      || el.age.toString().includes(srchTab.toString())
      || el.age.toString().includes(srchTab.toString())
      || el.tags.toString().includes(srchTab.toString())
      || el.address.toLowerCase().includes(srchTab.toLowerCase())
    }))
  },[srchTab])
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
         <div style={{border:'2px solid gray',height:'20px',width:'20px', borderRadius:'6px', padding:'1.6px'}}><TbCube size={13}/></div> Product       
         </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/"  className='flex gap-2'>
        <TbUserSquareRounded size={20}/>
        Customers
    </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/"  className='flex gap-2'>
           <TbDevicesDollar size={20}/>
            Income
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/"  className='flex gap-2'>
          <LuBadgePercent size={20}/>
            Promote
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/"  className='flex gap-2'>
         <MdOutlineLiveHelp size={20}/> Help    
        </a>
      ),
    },
  ];
  return (
    <div className=' bg-zinc-200 w-full px-10 py-5' >
      <div className='flex justify-between align-middle pb-4 sticky top-6 z-10'>
        <div style={{background:'rgb(255 255 255 / 76%)'}} className=' w-full flex text-center items-center px-3 rounded-md border border-gray-300 justify-between'> 
            <h3 className=' p-1 ' style={{fontSize:'1.3rem'}}>Hello User 👋</h3>
            <div className=' flex gap-2 items-center'>
            <Input.Search value={srchTab} placeholder="Search here" allowClear onChange={onChange} style={{ width: 200 }} />
            <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight" arrow>
            <LuMenuSquare 
              className='md:hidden flex cursor-pointer'
              size={28}>Click me</LuMenuSquare>  
            </Dropdown>
            </div>
        </div>
      </div>

      <Row className=' my-4' gutter={{  sm: 16, lg: 32 }}>
        {data2.map(el=>{
          return(
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
            <div style={{ ...style, height: '10rem', display: 'flex' }}>
              <div className='w-1/2 h-full flex items-center'>
                <Avatar size={ 100} style={{color: `${el.col}`, background: `${el.fil}`}}
                      icon={el.icon}
                    />
              </div>
              <div className='w-1/2 h-full flex flex-col justify-center'>
                <p style={{fontSize:'1em'}}>{el.title}</p>
                <p style={{fontSize:'1.4em', fontWeight:600}}>{el.earn}</p>
                <p style={{fontSize:'.8em', color:'gray'}} className=' flex'><IoIosArrowRoundUp size={18}/> {el.rate}</p>
              </div>
            </div>
          </Col>        )
        })}
    </Row>

      <Row gutter={{  sm: 16, lg: 32 }}>
          <Col className="gutter-row" lg={18} md={24} sm={24} xs={24}>
            <div style={{...style, height:'20rem'}}>
            <Image
                  width={"100%"}
                  height={300}
                  src={'https://wcs.smartdraw.com/chart/img/clustered-bar-chart.png?bn=15100111913'}
                />
            </div>
          </Col>
          <Col className="gutter-row " lg={6} md={12} sm={24} xs={24}>
            <div style={{...style,  height:'20rem'}}>
              <Image
                  style={{borderRadius:'1em'}}
                  width={"100%"}
                  height={300}
                  src={'https://media.istockphoto.com/id/471906116/vector/modern-vector-abstract-pie-chart-infographic.jpg?s=612x612&w=0&k=20&c=Q9zu-PJWzTpoSoNFWQ4GdDNd1lsJigGhv329lyMvZDI='}
                /></div>
          </Col>
    </Row>

    <Card title="Product Sell" extra={ 
        <Input.Search value={srchTab} placeholder="Search here" allowClear onChange={onChange} style={{ width: 200 }} />
    }>
    <Table 
    style={{minHeight:'40vh'}}
    pagination={false} 
    columns={columns} dataSource={tablRow} />
    </Card>
    </div>
  )
}
export default Header