import { Button } from "@nextui-org/react";

const DefaultButton = (props) => {
  return (
    <Button
      type="submit"
      size="sm"
      rounded
      css={{
        "&:hover": {
          boxShadow: "0 2px 8px 0 #7e868c"
        },
        marginRight: 10
      }}
      {...props}
    >
      Submit
    </Button>
  );
};

export default DefaultButton;
