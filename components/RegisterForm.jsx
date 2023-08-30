import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

function RegisterForm() {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Registration successful');
  };

  const validateRePassword = (_, value) => {
    if (value && value !== password) {
      return Promise.reject(new Error('Passwords do not match'));
    }
    return Promise.resolve();
  };

  return (
    <div className="flex flex-col text-center px-6 py-5 rounded-md shadow-sm w-[470px] border border-[#00000030]">
      <h2 className="font-[600] text-[24px]">Register</h2>
      <p className="font-[400] text-[18px]">Please register to continue.</p>
      
      <Form
        name="registerForm"
        onFinish={onFinish}
        form={form}
        style={{ marginTop: '20px' }}
        layout="vertical"
      >
        <Form.Item label="Full Name" className="text-[#777777] mb-2" name="fullName">
          <Input placeholder="Enter your full name" className="border border-[#0000000F] py-2 px-3" />
        </Form.Item>

        <Form.Item label="Email Address" className="text-[#777777] mb-2" name="email">
          <Input placeholder="Enter your email" className="border border-[#0000000F] py-2 px-3" />
        </Form.Item>

        <Form.Item label="Phone Number" className="text-[#777777] mb-2" name="phoneNumber">
          <Input placeholder="Enter your phone number" className="border border-[#0000000F] py-2 px-3" />
        </Form.Item>

        <Form.Item label="Create Password" className="text-[#777777] mb-2" name="password" rules={[{ required: true, message: 'Please enter a password' }]}>
          <Input.Password placeholder="Enter your password" className="border border-[#0000000F] py-2 px-3" onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item label="Re-enter Password" className="text-[#777777] mb-2" name="rePassword" rules={[{ required: true, message: 'Please reenter your password' }, { validator: validateRePassword }]}>
          <Input.Password placeholder="Reenter your password" className="border border-[#0000000F] py-2 px-3" onChange={handleRePasswordChange} />
        </Form.Item>

        <Form.Item className="my-5">
          <Button className="bg-[#3F93FF] register-btn py-5  flex w-full items-center justify-center text-white hover:text-white" block htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterForm;
