import React from 'react';
import { Form, Input, Button } from 'antd';

function Login() {
  const onFinish = (values) => {
    console.log('Form values:', values);
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
          <Button className="bg-[#1F5689] py-5  flex w-full items-center justify-center" >
            Continue with Google
          </Button>
        </Form.Item>

        <div className="flex justify-center my-3">
          <div>or</div>
        </div>

        <Form.Item>
          <Button className="bg-[#D7392B] py-5  flex w-full items-center justify-center text-white hover:text-white" block>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
