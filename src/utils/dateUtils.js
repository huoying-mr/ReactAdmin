/*
 * @Author: your name
 * @Date: 2021-06-13 15:56:55
 * @LastEditTime: 2021-06-13 15:59:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ReactAdmin/src/utils/dateUtils.js
 */
export function formateDate(time){
    if(!time) return '';
    let date= new Date(time);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
}