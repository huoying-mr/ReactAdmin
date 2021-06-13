import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';

import './Login.less';
import logo from '../../assets/images/logo.png';
import {reqLogin} from '../../api/index.js';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';


export default class Login extends Component {
    onFinish = async (values) => {
        const {username,password}=values;
        const response=await reqLogin(username,password);
        const result=response.data;
        if(result.status===0){
            //提示登錄成功
            message.success('登錄成功');
            //跳轉到管理界面
            const user=result.data;
            memoryUtils.user=user;
            storageUtils.saveUser(user);
            console.log("跳轉");
            this.props.history.replace('/');
        }else{
            message.error(result.msg);
        }
        console.log("请求成功",response.data);
      };
    render() {
        //先判斷用戶是否已經登錄，如果登陸了，跳轉到admin頁面
        const user=memoryUtils.user;
        console.log("有沒有用戶",user._id);
        if(user&&user._id){
            return <Redirect to='/'/>
        }
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        onFinish={this.onFinish}
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名！',
                                },
                                {
                                    min: 4,
                                    message: '用户名不得小于4位',
                                },
                                {
                                    max: 12,
                                    message: '用户名不得超过12位',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: '用户名由数字字母下划线组成',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                                {
                                    min: 4,
                                    message: '密码不得小于4位',
                                },
                                {
                                    max: 12,
                                    message: '密码不得超过12位',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: '密码由数字字母下划线组成',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}