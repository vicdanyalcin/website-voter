import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, Card, List, Row, Select, Col, message } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Confirm from "./Confirm";

const { Option } = Select;
const WebsiteList = () => {
  const {
    websites,
    deleteWebsite,
    increaseVote,
    decreaseVote,
    sortToHighest,
    sortToLowest,
  } = useContext(GlobalContext);
  const nodeRef = React.useRef(null);
  const handleOnChange = (value) => {
    if (value === "1") {
      sortToHighest(websites);
    }
    if (value === "2") {
      sortToLowest(websites);
    }
    return value;
  };
  const handleDelete = (item) => {
    deleteWebsite(item.id);
    message.success(
      <div>
        <b>{item.linkName}</b> Removed.
      </div>
    );
  };
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Card bordered={false}>
              <h1>Websites</h1>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Order By"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              onSelect={handleOnChange}
            >
              <Option value="1">Most Voted(Z-A)</Option>
              <Option value="2">Less Voted(A-Z)</Option>
            </Select>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={websites}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      icon={<ArrowUpOutlined />}
                      type={"text"}
                      onClick={() => increaseVote(item.id)}
                    >
                      Up Vote
                    </Button>,
                    <Button
                      icon={<ArrowDownOutlined />}
                      type="text"
                      onClick={() => decreaseVote(item.id)}
                    >
                      Down Vote
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <button className="btn">
                        <b>{item.vote}</b>
                        <p>POINTS</p>{" "}
                      </button>
                    }
                    title={
                      <div>
                        <h3>{item.linkName}</h3>
                      </div>
                    }
                    description={`(${item.linkUrl})`}
                  />

                  <Confirm
                    linkName={item.linkName}
                    onOk={() => handleDelete(item)}
                    nodeRef={nodeRef}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default WebsiteList;
