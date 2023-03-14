import React from "react";
import { Tooltip, Modal } from "@nextui-org/react";
import { icons } from "../inc/Icons";
import { IconButton } from "./IconButton";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

export const ImportButton = (props) => {
  const { permission } = props;
  const [openModal, setOpenModal] = React.useState(false);

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
    setOpenModal(false);
  };

  return (
    <>
      <Tooltip content={permission.name} shadow>
        <IconButton
          css={{ color: "#7e868c" }}
          onClick={() => setOpenModal(true)}
        >
          {icons[permission.name]}
        </IconButton>
      </Tooltip>
      <Modal
        blur
        width="700px"
        aria-labelledby="modal-title"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body>
          <Dropzone
            maxFiles={1}
            multiple={false}
            accept="application/vnd.ms-excel, .xlsx, .xls, .csv"
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{ dropzone: { minHeight: 100, maxHeight: 250 } }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImportButton;
