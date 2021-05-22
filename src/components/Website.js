import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {Button, Card} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined,CloseSquareOutlined} from "@ant-design/icons";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
 const Website = ({ website }) => {
    const {deleteWebsite,increaseVote, decreaseVote}  = useContext(GlobalContext);
     console.log(website)
    return (
        <Card >
           {/* {website?.linkName}*/}
           {/* {website?.linkUrl}*/}
           {/* <Button*/}
           {/*     onClick={() => deleteWebsite(website?.id)}*/}
           {/*     icon={<CloseSquareOutlined />}*/}
           {/*/> >*/}
           {/* {website?.vote}*/}
           {/* <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} />*/}
           {/* <Button type="primary" shape="circle" icon={<ArrowDownOutlined />} />*/}
           {/* <List*/}
           {/*     itemLayout="vertical"*/}
           {/*     size="large"*/}
           {/*     pagination={{*/}
           {/*         onChange: page => {*/}
           {/*             console.log(page);*/}
           {/*         },*/}
           {/*         pageSize: 3,*/}
           {/*     }}*/}
           {/*     dataSource={listData}*/}
           {/*     footer={*/}
           {/*         <div>*/}
           {/*             <b>ant design</b> footer part*/}
           {/*         </div>*/}
           {/*     }*/}
           {/*     renderItem={item => (*/}
           {/*         <List.Item*/}
           {/*             key={item.title}*/}
           {/*             actions={[*/}
           {/*                 <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,*/}
           {/*                 <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,*/}
           {/*                 <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,*/}
           {/*             ]}*/}
           {/*             extra={*/}
           {/*                 <img*/}
           {/*                     width={272}*/}
           {/*                     alt="logo"*/}
           {/*                     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"*/}
           {/*                 />*/}
           {/*             }*/}
           {/*         >*/}
           {/*             <List.Item.Meta*/}
           {/*                 avatar={<Avatar src={item.avatar} />}*/}
           {/*                 title={<a href={item.href}>{item.title}</a>}*/}
           {/*                 description={item.description}*/}
           {/*             />*/}
           {/*             {item.content}*/}
           {/*         </List.Item>*/}
           {/*     )}*/}
           {/* />,*/}
           {/* sd*/}
        </Card>
    );
};
 export default Website