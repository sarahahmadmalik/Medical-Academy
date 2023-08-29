import { Layout, Button, Avatar, Menu, Drawer } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link'
import {useState} from 'react';
const { Header } = Layout;

function WebHeader() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Header className="bg-white px-3 sm:px-auto">
      <div className="flex sm:items-start items-center justify-between">
      <div className=" items-center hidden sm:flex">
            <Link href="/" className="mr-3"><Image src="/images/facebook.svg" width={10} height={10} alt="facebookLogo" /></Link>
            <Link href="/" className="mr-3"><Image src="/images/whatsapp.svg" width={18} height={18} alt="facebookLogo" /></Link>
            <Link href="/" className="mr-3"><Image src="/images/instagram.svg" width={18} height={18} alt="facebookLogo" /></Link>
            <Link href="/" className="font-[500]">Home</Link>
        </div>

        <Link href="/" className="py-3 hover:text-[#1F5689]">
          <Image src="/images/logo.svg" alt="logo" width={70} height={70} />
        </Link>

        <div className="hidden sm:block">
         
          <button  className="flex items-center">Log In
          
          <div  className="bg-[#3F93FF1F] p-3 rounded-full ml-2" ><Image src="/images/profile.svg" width={20} height={20} /></div>
      
          </button>
        </div>
        <div className="block sm:hidden">
        <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '20px' }} />}
            onClick={toggleDrawer}
            className=""
          />
      </div>
      </div>
      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={drawerVisible}
        key="left"
      >
        <Menu mode="vertical">
          <Menu.Item key="facebook">
            <Link href="/">
              <Image src="/images/facebook.svg" width={10} height={10} alt="facebookLogo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="whatsapp">
            <Link href="/">
              <Image src="/images/whatsapp.svg" width={18} height={18} alt="whatsappLogo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="instagram">
            <Link href="/">
              <Image src="/images/instagram.svg" width={18} height={18} alt="instagramLogo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="home">
            <Link href="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
}

export default WebHeader;
