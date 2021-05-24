import React from "react";
import { Card } from "antd";


const Website = ({ website }) => {
  //   const { deleteWebsite, increaseVote, decreaseVote } =
  //     useContext(GlobalContext);
  console.log(website);
  return (
    <Card>
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
export default Website;
