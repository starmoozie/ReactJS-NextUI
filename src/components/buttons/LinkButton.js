import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { path, size, label, light } = props;

  return (
    <Button
      rounded
      size={size ?? "md"}
      light={light ?? false}
      as={Link}
      to={path}
      css={{
        "&:hover": {
          boxShadow: "0 2px 8px 0 #7e868c"
        },
        marginRight: 10
      }}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
