/**
 * 要求：能根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
import { message } from 'antd';
import jsonp from 'jsonp';

import ajax from './ajax.js';


// const BASE="http://localhost:5000";

const BASE="";
// export function reqLogin(username,password){
//     return ajax('/login',{username,password},'POST');
// }

//登录请求
export const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST');

//添加用户请求
export const reqAddUser=(user)=>ajax(BASE+'/manager/user/add',user,'POST');

//jsonp请求接口的函数
export const reqGetWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        const url=`http://wthrcdn.etouch.cn/weather_mini?citykey=${city}`;
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data);
            if(!err&&data.desc==='OK'){
                resolve(data);
            }else{
                message.error("获取天气信息失败");
            }
        })
    })
};
reqGetWeather('101280101');