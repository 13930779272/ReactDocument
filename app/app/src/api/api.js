import instance from './index'
export const loginAPI = ({account,password}) => instance.post('/user/login',{account,password})
//登录验证
export const isLoginAPI = () => instance.get('/user/login').then(d=>d.code===0);