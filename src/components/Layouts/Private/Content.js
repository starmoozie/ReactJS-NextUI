import { Spacer } from "@nextui-org/react";
import { Box } from "../../inc/Box";
import { Outlet } from "react-router-dom";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$12", "@xsMax": { px: "$10" } }}>
    <Outlet />
    <Spacer y={1} />
  </Box>
);
