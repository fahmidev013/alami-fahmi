import React from "react";
import { Modal, Button } from "antd";
import PropTypes from "prop-types";

const ModalComponent = ({type, visible, onConfirm}) => {
  return (
    <Modal title={type.title} visible={visible} footer={[
        <Button key="submit" type="primary" onClick={onConfirm}>
          OK
        </Button>,
      ]}>
      <p>{type.content}</p>
    </Modal>
  );
};

ModalComponent.propTypes = {
  type: PropTypes.object,
  visible: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
};

ModalComponent.defaultProps = {
  type: { isSuccess: false, title: "", content: "" },
  visible: false,
};

export default ModalComponent;
