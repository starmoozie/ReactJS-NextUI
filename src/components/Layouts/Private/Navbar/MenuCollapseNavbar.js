import { Navbar, Link as LinkUI } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

const MenuCollapseNavbar = (props) => {
  const { menu } = props;
  const location = useLocation();

  return (
    <Navbar.Collapse>
      {menu.map((item, index) => {
        const children = item.children.filter(
          (children) => location.pathname === children.path
        );
        const active = children.length > 0 || item.path === location.pathname;

        return (
          <Navbar.CollapseItem
            key={item.id}
            activeColor="primary"
            isActive={active}
          >
            {item.children.length ? (
              <RenderNestedMenu {...item} />
            ) : (
              <RenderSingleMenu {...item} />
            )}
          </Navbar.CollapseItem>
        );
      })}
    </Navbar.Collapse>
  );
};

const RenderSingleMenu = (item) => (
  <LinkUI
    color="inherit"
    css={{
      minWidth: "100%"
    }}
    as={Link}
    to={item.path}
  >
    {item.name}
  </LinkUI>
);

const RenderNestedMenu = (item) => (
  <>
    {item.children.map((chilren) => (
      <LinkUI
        key={chilren.id}
        color="inherit"
        css={{
          minWidth: "100%"
        }}
        as={Link}
        to={chilren.path}
      >
        {item.name} / {chilren.name}
      </LinkUI>
    ))}
  </>
);

export default MenuCollapseNavbar;
