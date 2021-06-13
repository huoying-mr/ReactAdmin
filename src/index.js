/*
应用入口文件
主要将App组件渲染到index.html的根div标签中
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";

//引入自定义组件
import App from './App.js';

ReactDOM.render(<App/>,document.getElementById('root'));
