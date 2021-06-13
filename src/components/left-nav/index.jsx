//管理頁面左部導航組件
import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

import './index.less';
import logo from '../../assets/images/logo.png'
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

class LeftNav extends Component {
    //根据菜单列表动态渲染菜单组件
    getMenuNodes=(menuList)=>{
        const path=this.props.location.pathname;
        console.log('菜单列表',menuList);
        return menuList.map((item)=>{
            console.log('图标',item.icon)
            if(!item.children){
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }else{
                const citem=item.children.find(citem=>citem.key===path)
                if(citem){
                    this.openKey=item.key;
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }
    //第一次render之前执行，为第一次render做准备
    componentWillMount(){
        this.menuNodes=this.getMenuNodes(menuList);
    }
    render() {
        const path=this.props.location.pathname;
        console.log('打开的key',this.openKey);
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>尚硅谷後台</h1>
                </Link>

                {/* <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="home" icon={<PieChartOutlined />}>
                        <Link to='/home'>首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="/category" icon={<PieChartOutlined />}>
                            <Link to='/category'>品類管理</Link>
                        </Menu.Item>
                        <Menu.Item key="/product" icon={<PieChartOutlined />}>
                            <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user" icon={<PieChartOutlined />}>
                        <Link to='/user'>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/role" icon={<PieChartOutlined />}>
                        <Link to='/role'>角色管理</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="图形图表管理">
                        <Menu.Item key="/charts/bar" icon={<PieChartOutlined />}>
                            <Link to='/charts/bar'>柱状图</Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/line" icon={<PieChartOutlined />}>
                            <Link to='/charts/line'>折线图</Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/pie" icon={<PieChartOutlined />}>
                            <Link to='/charts/pie'>饼图</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu> */}
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    defaultOpenKeys={[this.openKey]}
                >
                    {
                        this.menuNodes
                    }
                </Menu> 
            </div>
        )
    }
}

export default withRouter(LeftNav)