import { Navbar, Dropdown, Avatar, Text, Switch } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { DarkIcon, LightIcon } from "../../../inc/Icons";

const MenuRightNavbar = () => {
  const darkMode = useDarkMode(false);

  return (
    <Navbar.Content>
      <Switch
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
        iconOn={<LightIcon filled />}
        iconOff={<DarkIcon filled />}
      />
      <Dropdown placement="bottom-right">
        <Navbar.Item>
          <Dropdown.Trigger>
            <Avatar
              bordered
              as="button"
              color="primary"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Dropdown.Trigger>
        </Navbar.Item>
        <Dropdown.Menu
          color="primary"
          aria-label="User menu actions"
          onAction={(actionKey) => console.log({ actionKey })}
        >
          <Dropdown.Item key="profile" css={{ height: "$18" }} textValue>
            <Text b color="inherit" css={{ d: "flex" }}>
              Signed in as
            </Text>
            <Text b color="inherit" css={{ d: "flex" }}>
              zoey@example.com
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="logout" withDivider color="error">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.Content>
  );
};

export default MenuRightNavbar;
