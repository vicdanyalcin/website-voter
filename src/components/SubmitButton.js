import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Card } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SubmitButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/add");
  };
  return (
    <Row>
      <Col span={8} offset={8}>
        <Card bordered={false}>
          <button className={"btn"} onClick={handleClick}>
            <PlusOutlined style={{ fontSize: 40 }} />
          </button>
          <span className={"btn-span"}>SUBMIT A LINK</span>
        </Card>
      </Col>
    </Row>
  );
};

export default SubmitButton;
