import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { message } from 'antd';
import { useAuth } from '../context/AuthProvider';
import { useRouter } from 'next/router';

function ProfileForm() {
  const auth = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: (auth.user?.firstName || '') + ' ' + (auth.user?.lastName || ''),
    email: auth.user?.email || '',
    phone: auth.user?.phone || '',
    pmdc: auth.user?.pmdc || '',
    city: auth.user?.city || '',
  });
  

  const { fullName, email, phoneNumber, pmdc, city } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFinish = () => {
    const inputsChanged = Object.keys(formData).some(
      (key) => formData[key] !== auth.user[key]
    );
  
    if (inputsChanged) {
      message.success('Profile Updated');
    } else {
      message.info('Profile is Up to Date');
    }
  };

  return (
    <div className="flex flex-col px-6 py-5 rounded-md shadow-sm w-[440px] border border-[#00000030]">
      <h2 className="font-[600] text-[24px]">Update Profile</h2>

      <Form
        name="profileForm"
        onFinish={onFinish}
        style={{ marginTop: '20px' }}
        layout="vertical"
        initialValues={formData}
      >
        <Form.Item label="Full Name" className="text-[#777777] mb-2" name="fullName">
          <Input
            placeholder="Full Name"
            className="border border-[#0000000F] py-2 px-3"
            value={fullName}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Email Address" className="text-[#777777] mb-2" name="email">
          <Input
            placeholder="Email Address"
            className="border border-[#0000000F] py-2 px-3"
            value={email}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Phone Number" className="text-[#777777] mb-2" name="phone">
          <Input
            placeholder="Phone Number"
            className="border border-[#0000000F] py-2 px-3"
            value={phoneNumber}
            onChange={handleChange}
          />
        </Form.Item>

    
          <Form.Item label="PMDC" className="text-[#777777] mb-2" name="pmdc">
            <Input
              placeholder="PMDC"
              className="border border-[#0000000F] py-2 px-3"
              value={pmdc}
              onChange={handleChange}
            />
          </Form.Item>

        <Form.Item label="City" className="text-[#777777] mb-2" name="city">
          <Input
            placeholder="City"
            className="border border-[#0000000F] py-2 px-3"
            value={city}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Button className="bg-[#3F93FF] update-btn py-5 mt-4 flex w-full items-center justify-center text-white hover:text-white" block htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProfileForm;
