/**用於存儲local數據管理的工具模塊 */
const USER_KEY='user_key';
export default{
    //保存用戶
    saveUser(user){
        localStorage.setItem(USER_KEY,JSON.stringify(user));
    },
    //獲取用戶
    getUser(){
        return JSON.parse(localStorage.getItem(USER_KEY)||'{}');
    },
    //移除用戶
    removeUser(){
        localStorage.removeItem(USER_KEY);
    }
}