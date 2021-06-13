import React,{ Component } from "react";
import {Button} from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.less';

import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import memoryUtils from "./utils/memoryUtils";
import storageUtils from './utils/storageUtils';

/*
应用根组件

组件：简单组件用函数定义，复杂组件用类定义，简单与否主要看有没有状态
*/
export default class App extends Component{

    render (){
        //從本地獲取用戶信息並存入內存中
        const user=storageUtils.getUser();
        memoryUtils.user=user;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}