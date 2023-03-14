import { Content } from "./Content.js";
import { Box } from "../../inc/Box";
import Navbar from "./Navbar";

export const Layout = () => (
  <Box css={{ maxW: "100%" }}>
    <Navbar />
    <Content />
  </Box>
);
