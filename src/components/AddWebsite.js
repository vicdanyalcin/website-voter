import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Input, Button, message, Typography, Card, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {useLocalStorage} from "../util";

const { Text } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export const AddWebsite = () => {
  const [form] = Form.useForm();

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const { addWebsite,websites } = useContext(GlobalContext);
  // const [websitesL, setWebsites] = useLocalStorage(
  //     "SAVED_WEBSITES",
  //     websites
  // );  console.log(websites);
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newWebsite = {
      id: Math.floor(Math.random() * 100000000),
      linkUrl: text,
      linkName: name,
      vote: 0,
    };
    if (text && name) {
      addWebsite(newWebsite);
      // const newWebsites = [...websitesL, newWebsite];
      //
      // setWebsites(newWebsites)
      message.success(
        <div>
          <b>{newWebsite.linkName}</b> Added.
        </div>
      );
    }
    form.resetFields();
    setText("");
    setName("");
  };
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={handleClick}
            type={"text"}
          >
            Return to list
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <Card>
            <h2>
              <b>Add new website</b>
            </h2>
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <span>Link Name:</span>

              <Form.Item
                // label="Link Name:"
                // name="linkName"
                rules={[
                  {
                    required: true,
                    message: "Please input your website!",
                  },
                ]}
              >
                <Input
                  placeholder={"e.g Alphabet"}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Item>
              <span>Link URL:</span>
              <Form.Item
                // label="Link URL:"
                // name="linkUrl"
                rules={[
                  {
                    required: true,
                    message: "Please input your url!",
                  },
                ]}
              >
                <Input
                  placeholder={"e.g http://abc.xyz"}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={onSubmit}>
                  ADD
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
