//管理頁面頭部組件
import React, { Component } from "react";
import {formateDate} from '../../utils/dateUtils';
import {default as storageUtils} from '../../utils/storageUtils';
import {default as memoryUtils} from '../../utils/memoryUtils';
import {withRouter} from "react-router-dom"
import {Modal} from 'antd';

import './index.less';
import {reqGetWeather} from './../../api/index';
import menuList from '../../config/menuConfig';

class Header extends Component {
    state={
        currentTime: formateDate(Date.now()),
        visible:false
    };
    getTime=()=>{
        this.intervalId=setInterval(()=>{
            const currentTime=formateDate(Date.now());
            this.setState({currentTime});
        },1000);
    }
    getWeather=async()=>{
        //调用接口请求异步数据
        const {weather}=await reqGetWeather('北京');
    }
    getTitle=()=>{
        const path=this.props.location.pathname;
        let title;
        menuList.forEach(item=>{
            if(item.key===path){
                title=item.title
            }else if(item.children){
                const cItem=item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title=cItem.title;
                }
            }
        })
        return title;
    }
    handleOk=()=>{
        storageUtils.removeUser();
        memoryUtils.user={};
        this.props.history.replace('/login');
    }
    componentDidMount(){
        //获取当前时间
        this.getTime();
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {
        let title=this.getTitle();
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎 admin</span>
                    <a href="javascript:">退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>{title}</div>
                    <div className='header-bottom-right'>
                        <span>2021-6-9 0:22</span>
                        <img src="https://img0.baidu.com/it/u=2187720189,605271663&fm=26&fmt=auto&gp=0.jpg" alt=""/>
                        <span>晴</span>
                    </div>
                </div>
                <Modal
                    title="退出登录"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={()=>{this.setState({visible:false})}}
                >
                    <p>确认要退出吗？</p>
                </Modal>

            </div>
        )
    }
}

export default withRouter(Header)