import React from 'react';
import {Layout, Row, Col, Divider} from 'antd';
import logo from "../assets/logo.png"

const {Header, Content} = Layout;

export const NavBar = () => {
    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={8}> <img src={logo} alt={""} width={200} height={100}/></Col>
                    {/*<Col span={8}>col-8</Col>*/}
                    {/*<Col span={8}>col-8</Col>*/}
                </Row>
            </Header>
            <Divider/>
            <Content style={{padding: '0 10px'}}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
            </Content>
        </Layout>
    );
};
