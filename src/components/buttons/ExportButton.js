import React from "react";
import { Tooltip } from "@nextui-org/react";
import { icons } from "../inc/Icons";
import { IconButton } from "./IconButton";

export const ExportButton = (props) => {
  const { item, permission } = props;

  return (
    <Tooltip content={permission.name} shadow>
      <IconButton css={{ color: "#7e868c" }} onClick={() => alert(item)}>
        {icons[permission.name]}
      </IconButton>
    </Tooltip>
  );
};

export default ExportButton;
