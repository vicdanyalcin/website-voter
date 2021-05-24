import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {Button, Card, List, Row, Select, Alert, Col, message} from "antd";
import {
  CloseSquareOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import Confirm from "./Confirm";
import {useLocalStorage} from "../util";

const { Option } = Select;
const WebsiteList = () => {
  const { websites, deleteWebsite, increaseVote, decreaseVote,sortToHighest,sortToLowest } =
    useContext(GlobalContext);
    const [websitesL, setWebsites] = useLocalStorage(
        "SAVED_WEBSITES",
            websites
    );  console.log(websites);
    const nodeRef = React.useRef(null);
   const handleOnChange = (value) => {
if(value === "1") {
    console.log(value)
    sortToHighest(websites)

}if(value==="2") {
           console.log(value)

           sortToLowest(websites)
       }
       console.log(value)
    }
  const handleDelete = (item) => {
      deleteWebsite(item.id);
     const newWebsites= websitesL.filter((r) => r.id !== item.id)
         setWebsites(newWebsites)
      message.success(
          <div>
              <b>{item.linkName}</b> Removed.
          </div>
      )  }
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
              onSelect={ handleOnChange}
            >
              <Option
                                    value="1">Most Voted(Z-A)</Option>
              <Option  value="2">Less Voted(A-Z)</Option>
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
                  {/*<button*/}
                  {/*  onClick={() => deleteWebsite(item.id)}*/}
                  {/*  className="delete-btn"*/}
                  {/*>*/}
                  {/*  x*/}
                  {/*</button>*/}
                    <Confirm linkName={item.linkName} onOk={()=>handleDelete(item)} nodeRef={nodeRef}/>
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
