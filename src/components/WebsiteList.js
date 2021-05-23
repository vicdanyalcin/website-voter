import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, Card, List, Row, Select, Alert, Col } from "antd";
import {
  CloseSquareOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import Confirm from "./Confirm";

const { Option } = Select;
const WebsiteList = () => {
  const { websites, deleteWebsite, increaseVote, decreaseVote } =
    useContext(GlobalContext);
  console.log(websites);
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Card bordered={false}>
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
              // footer={
              //   <div>
              //     <b>ant design</b> footer part
              //   </div>
              // }
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    //
                    // <h1>  {item.linkName}</h1>,
                    // <h2>({item.linkUrl})</h2>,
                    // <>
                    //   <Confirm title={`Do you want to remove ${(item.linkName).toUpperCase()} ?`} linkName={item.linkName} handleOkay={()=>deleteWebsite(item.id)}/>
                    // </>,

                    // <Button
                    //   icon={<CloseSquareOutlined />}
                    //   onClick={() => deleteWebsite(item.id)}
                    // />,

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
                  // extra={
                  //
                  //     <button className="btn">
                  //     <p>{item.vote}</p> POINTS{" "}
                  //     </button>
                  // }
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
                  <button
                    onClick={() => deleteWebsite(item.id)}
                    className="delete-btn"
                  >
                    x
                  </button>
                </List.Item>
              )}
            />

            {/*<ul id="list" className="list">*/}
            {/*    {websites?.map((website) => (*/}
            {/*        <Website key={website.id} website={website} />*/}
            {/*    ))}*/}
            {/*</ul>*/}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default WebsiteList;
