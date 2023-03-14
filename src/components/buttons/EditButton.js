import React from "react";
// import { Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { EditIcon } from "../inc/Icons";
import { IconButton } from "./IconButton";

export const EditButton = (props) => {
  const { item, permission } = props;

  return (
    // <Tooltip content={permission.name} color="warning" shadow>
    <IconButton
      as={Link}
      to={permission.path.replace(":id", item.id)}
      state={item}
      css={{ color: "#7e868c" }}
    >
      <EditIcon />
    </IconButton>
    // </Tooltip>
  );
};

export default EditButton;
