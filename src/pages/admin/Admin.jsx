import React, { Component } from 'react';
import { Redirect,Route,Switch } from 'react-router-dom';
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import Category from '../category/category';
import Home from '../home/home';
import Product from '../product/product';
import Role from '../role/role';
import User from '../user/user';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
import Order from '../order/order';

const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {

    render() {
        //先獲取登錄的用戶
        const user = memoryUtils.user;
        console.log('用戶', user);
        if (!user || !user._id) {
            return <Redirect to='/login' />//如果沒有用戶，說明沒登錄，重定向回登錄界面
        }
        return (
            <Layout style={{'height':'100%'}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{'backgroundColor':'white','margin':20}}>
                        <Switch>
                            <Route path='/category' component={Category}></Route>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/charts/bar' component={Bar}></Route>
                            <Route path='/charts/line' component={Line}></Route>
                            <Route path='/charts/pie' component={Pie}></Route>
                            <Route path='/order' component={Order}></Route>
                            <Redirect to='/home'></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{'textAlign':'center','color':'gray'}}>推薦使用谷歌瀏覽器，可以獲得最佳界面操作體驗</Footer>
                </Layout>
            </Layout>
        )
    }
}