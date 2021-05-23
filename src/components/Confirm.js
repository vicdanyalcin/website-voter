import React, { useState } from "react";
import { Popconfirm, Button, Alert, message, Modal, Typography } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Confirm = ({ onConfirm, website, title, handleOkay, linkName }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // const [visible, setVisible] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  // // const success = () => {
  // //     message.success({
  // //         content: 'This is a prompt message with custom className and style',
  // //         className: 'custom-class',
  // //         style: {
  // //             marginTop: '20vh',
  // //         },
  // //     },100);
  // //
  // // };
  // const showPopconfirm = () => {
  //     setVisible(true);
  // };
  //
  // const handleOk = () => {
  //     setConfirmLoading(true);
  //     setTimeout(() => {
  //         setVisible(false);
  //         setConfirmLoading(false);
  //         message.success({
  //             content: 'This is a prompt message with custom className and style',
  //             className: 'custom-class',
  //             style: {
  //                 marginTop: '20vh',
  //             },
  //         },100);        }, 2000);
  // };
  //
  // const handleCancel = () => {
  //     console.log('Clicked cancel button');
  //     setVisible(false);
  // };

  return (
    <>
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button icon={<CloseSquareOutlined />} onClick={showModal} />
        <Modal
          title={"Remove Link"}
          visible={isModalVisible}
          centered
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Title level={5} type="secondary" style={{ textAlign: "center" }}>
            Do you want to remove:{" "}
          </Title>
          <h2 style={{ textAlign: "center" }}>
            <b>{linkName}</b>
          </h2>
        </Modal>
      </>
    </>
  );
};
export default Confirm;
