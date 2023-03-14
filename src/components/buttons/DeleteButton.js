import React from "react";
import { Tooltip } from "@nextui-org/react";
import { icons } from "../inc/Icons";
import { IconButton } from "./IconButton";

export const DeleteButton = (props) => {
  const { item, permission } = props;

  return (
    <Tooltip content={permission.name} color="error" shadow>
      <IconButton css={{ color: "Red" }} onClick={() => alert(item)}>
        {icons[permission.name]}
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
