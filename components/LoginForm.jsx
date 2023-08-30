import React from 'react';
import { Form, Input, Button } from 'antd';
import User from '../data/User'
import {message} from 'antd'
import {useAuth} from '../context/AuthProvider'
import { useRouter } from 'next/router';
function LoginForm() {
  const auth = useAuth();
  const router = useRouter();

  const onFinish = (values) => {
    if (values.email === User.email && values.password === User.password) {
      auth.login(auth.user);
      message.success('Logged in successfully');
      setTimeout(() => {
        router.push('/'); 
      }, 2000); 
      
    } else {
      message.error('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col text-center px-6 py-5 rounded-md shadow-sm w-[470px] border border-[#00000030]">
      <h2 className="font-[600] text-[24px]">Login</h2>
      <p className="font-[400] text-[18px]">Please login in to continue.</p>
      
      <Form
        name="loginForm"
        onFinish={onFinish}
        style={{ marginTop: '20px' }}
        layout="vertical"
      >
        <Form.Item label="Email Address" className="text-[#777777] mb-2" name="email">
          <Input placeholder="Enter your email" className="border border-[#0000000F] py-2 px-3 " />
        </Form.Item>

        <Form.Item label="Password" className="text-[#777777] " name="password">
          <Input.Password className="border border-[#0000000F] py-2 px-3" placeholder="Enter your password" />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button className="bg-[#1F5689] google-btn py-5  flex w-full items-center justify-center" >
            Continue with Google
          </Button>
        </Form.Item>

        <div className="flex justify-center my-3">
          <div>or</div>
        </div>

        <Form.Item>
          <Button className="bg-[#D7392B] login-btn py-5  flex w-full items-center justify-center text-white hover:text-white" block htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
}

export default LoginForm;
