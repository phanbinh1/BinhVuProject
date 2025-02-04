import React from 'react';
import "./style/sidebarStyle.scss";
const SideBar = () => {
   return (
          <div  className="blockSideBar">
             <ul className="blockSideBar__menuSideBar">
                 <li className="blockSideBar__listItem">USERS</li>
                 <li className="blockSideBar__listItem">TOUR</li>
             </ul>
          </div>
   )
}
export default  SideBar;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// //import './index.css';
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// const SideBar = () => {
// return (
//   <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           Users
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           Tour
//         </Menu.Item>
//         {/* <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3

//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item> */}
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>
//    //  document.getElementById('container')
// );
// }
// export default  SideBar;
//   </Layout>
//    //  document.getElementById('container')
// );
// }
// export default  SideBar;