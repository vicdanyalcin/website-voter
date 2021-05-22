import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import Website from "./Website";
import { Button, Card, List, Row} from "antd";
import {Space} from 'antd';
import {
    CloseSquareOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';


const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const WebsiteList = () => {
    const {websites, deleteWebsite} = useContext(GlobalContext);
    console.log(websites)
    return (
        <>
            <h3>Websites</h3>
            <Row gutter={24} justify={"center"}>
                <Card>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 5,
                        }}
                        dataSource={websites}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                                actions={[
                                    <Button icon={<CloseSquareOutlined/>} onClick={() => deleteWebsite(item.id)}/>,
                                    <Button icon={<ArrowDownOutlined/>} onClick={() => deleteWebsite(item.id)}/>,
                                    <Button icon={<ArrowUpOutlined/>} onClick={() => deleteWebsite(item.id)}/>,
                                ]}
                                // extra={
                                //     <img
                                //         width={272}
                                //         alt="logo"
                                //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                //     />
                                // }
                            >
                                {/*<List.Item.Meta*/}
                                {/*    avatar={<Avatar src={item.avatar} />}*/}
                                {/*    title={<a href={item.href}>{item.title}</a>}*/}
                                {/*    description={item.description}*/}
                                {/*/>*/}
                                {item.linkName}
                                <div>({item.linkUrl})</div>
                                <button className="btn"><p>{item.vote}</p>  POINTS </button>
                            </List.Item>

                        )}
                    />

                    {/*<ul id="list" className="list">*/}
                    {/*    {websites?.map((website) => (*/}
                    {/*        <Website key={website.id} website={website} />*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </Card>
            </Row>
        </>

    );
};
export default WebsiteList;