import React from 'react';
import { Layout, Breadcrumb,Row ,Col} from 'antd';
import logo from "../assets/logo.png"
const { Header, Content, Footer } = Layout;

export const NavBar = () => {
    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={8}> <img src={logo} alt={""} width={200} height={100}/></Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Frontend Challenge</Footer>
        </Layout>
    );
};
