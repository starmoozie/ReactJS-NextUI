import { Navbar, Dropdown } from "@nextui-org/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { icons } from "../../../inc/Icons";

const MenuNavbar = (props) => {
  const { menu } = props;

  return (
    <Navbar.Content
      enableCursorHighlight
      activeColor="primary"
      hideIn="xs"
      variant="underline"
    >
      {menu.map((item) =>
        item.children.length ? (
          <RenderNestedItem {...item} key={item.id} />
        ) : (
          <RenderSingleItem {...item} key={item.id} />
        )
      )}
    </Navbar.Content>
  );
};

const RenderNestedItem = (item) => {
  const navigate = useNavigate();
  const location = useLocation();
  const children = item.children.filter(
    (children) => location.pathname === children.path
  );
  const active = children.length > 0;

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Dropdown>
      <Navbar.Item isActive={active}>
        <Dropdown.Button
          auto
          light
          css={{
            px: 0,
            dflex: "center",
            svg: { pe: "none" }
          }}
          iconRight={icons.chevron}
          ripple={false}
        >
          {item.name}
        </Dropdown.Button>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="ACME features"
        css={{
          $$dropdownMenuWidth: "340px",
          $$dropdownItemHeight: "70px",
          "& .nextui-dropdown-item": {
            py: "$4",
            // dropdown item left icon
            svg: {
              color: "$secondary",
              mr: "$4"
            },
            // dropdown item title
            "& .nextui-dropdown-item-content": {
              w: "100%",
              fontWeight: "$semibold"
            }
          }
        }}
        selectedKeys={[children[0]?.path]}
        onSelectionChange={(e) => handleClick({ ...e }.currentKey)}
        selectionMode="single"
      >
        {item.children.map((children) => {
          return (
            <Dropdown.Item
              key={children.path}
              showFullDescription
              description={children.description}
              icon={icons[children.name]}
            >
              {children.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const RenderSingleItem = (item) => {
  const location = useLocation();
  const active = location.pathname === item.path;

  return (
    <Navbar.Link isActive={active} to={item.path} as={Link}>
      {item.name}
    </Navbar.Link>
  );
};

export default MenuNavbar;
