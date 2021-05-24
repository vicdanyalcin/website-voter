import React, { useState } from "react";
import { Modal, Typography } from "antd";
const { Title } = Typography;

const Confirm = ({ linkName, onOk, nodeRef }) => {
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
  return (
    <div>
      <button onClick={showModal} className="delete-btn">
        x
      </button>
      <Modal
        nodeRef={nodeRef}
        title={"Remove Link"}
        visible={isModalVisible}
        centered
        onOk={onOk}
        onCancel={handleCancel}
      >
        <Title level={5} type="secondary" style={{ textAlign: "center" }}>
          Do you want to remove:{" "}
        </Title>
        <h2 style={{ textAlign: "center" }}>
          <b>{linkName}</b>
        </h2>
      </Modal>
    </div>
  );
};
export default Confirm;
