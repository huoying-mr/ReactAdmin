//管理頁面頭部組件
import React, { Component } from "react";

import './index.less';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎 admin</span>
                    <a href="javascript:">退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>首页</div>
                    <div className='header-bottom-right'>
                        <span>2021-6-9 0:22</span>
                        <img src="https://img0.baidu.com/it/u=2187720189,605271663&fm=26&fmt=auto&gp=0.jpg" alt=""/>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}