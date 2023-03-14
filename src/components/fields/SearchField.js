import { Input, Text } from "@nextui-org/react";

export const SearchField = (props) => {
  return (
    <Input
      color="primary"
      aria-label="Search"
      underlined
      labelLeft={
        <Text b css={{ textTransform: "capitalize" }}>
          Search
        </Text>
      }
      placeholder="Type here..."
    />
  );
};

export default SearchField;
