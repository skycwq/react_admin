import React, { Component } from 'react'
import { Form,  Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'
// import bg from './images/bg.jpg'
import logo from './images/logo.png'
// 登录路由组件
export default class Login extends Component {
     NormalLoginForm = () => {
        return (values) => {
          console.log('Received values of form: ', values);
        }}
    //密码验证
    validator=async(rule, value) => {
        
            try{
                if(!value){
                    throw new Error('密码不能为空')
                }else if(value.length<4){
                    throw new Error('密码最少4位')
                }else if(value.length>12){
                    throw new Error('密码最长12位')
                }else{
                   
                }
            }catch(err){
                throw new Error(err)
            }
        
    }
    render(){

        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt={logo} />
                    <h2>React项目：后台管理系统</h2>
                </header>
                <div className="denglu">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.NormalLoginForm()}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '请输入用户名' },
                                {min:4,message:'用户名最少4位'},
                                {max:12,message:'用户名最多12位'},
                                {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是字母数字下划线'}
                        ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{validator:this.validator}] }
                               
                                
                                
                              
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                          
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               登录
        </Button>
       
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
