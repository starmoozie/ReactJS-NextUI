import React from "react";
// import { Tooltip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { DetailIcon } from "../inc/Icons";
import { IconButton } from "./IconButton";

export const DetailButton = (props) => {
  const { item, permission } = props;

  return (
    // <Tooltip content={permission.name} shadow>
    <IconButton
      as={Link}
      to={permission.path.replace(":id", item.id)}
      state={item}
      color="text"
      css={{
        color: "#7e868c",
        m: 10
      }}
    >
      <DetailIcon />
    </IconButton>
    // </Tooltip>
  );
};

export default DetailButton;
