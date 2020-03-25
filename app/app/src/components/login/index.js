import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {loginAPI} from '../../api/api';
import md5 from 'js-md5'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:''
    }
  }
  onFinish = values => {
    let {username,pass} = values
    // console.log(this.props)
    const {history:{push}} = this.props
    loginAPI({account:username,password:md5(pass)}).then(d=>{
      console.log(d)
      if(d.code === 0){
        push({
          pathname:'/home',
          id:1,
          id1:1000
        })
      }
    })
  }
  render() {
    // console.log(this.props)
    // let {val} = this.state
    const userRule = [
      {
        required: true,
        message: 'Please input your Username!',
      },
    ]
    const passRule = [
      {
        required: true,
        message: 'Please input your Password!',
      },
    ]
    return (
      <Form name="normal_login"className="login-form" onFinish={this.onFinish} >
        <Form.Item name="username" rules={userRule} >
          <Input prefix={<UserOutlined/>} placeholder="请输入用户名" ref="txt"/>
        </Form.Item>
        <Form.Item name="pass" rules={passRule} >
          <Input prefix={<LockOutlined/>} type="password" placeholder="请输入密码" ref="ps" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </Form.Item>
      </Form>
    );
  }
}

 
export default Login;