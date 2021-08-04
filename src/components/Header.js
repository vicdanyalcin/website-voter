import React from "react";
import { Layout, Row, Col } from "antd";

const { Header } = Layout;

export const NavBar = () => {
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={8} offset={4}>
              <h1>Lorem Ipsum</h1>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};
