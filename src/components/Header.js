import React from "react";
import { Layout, Row, Col } from "antd";
import logo from "../assets/logo.png";

const { Header } = Layout;

export const NavBar = () => {
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={8} offset={4}>
            {" "}
            <img src={logo} alt={""} width={200} height={100} />
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};
