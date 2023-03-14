import React, { useMemo } from "react";
import {
  Button
  // Tooltip
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { icons } from "../inc/Icons";

export const CreateButton = (props) => {
  const permission = useMemo(() => props.permission, [props.permission]);

  return (
    // <Tooltip content={permission.name} shadow>
    <Button
      icon={icons[permission.name]}
      as={Link}
      to={permission.path}
      rounded
      css={{
        "&:hover": {
          boxShadow: "0 2px 8px 0 #7e868c"
        }
      }}
    >
      {permission.name}
    </Button>
    // </Tooltip>
  );
};

export default CreateButton;
