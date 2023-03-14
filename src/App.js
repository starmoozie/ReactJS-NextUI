import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { Layout } from "./components/Layouts/Private";
import PrivateRoute from "./routes/PrivateRoute";
import { menu } from "./_constants/menuData";

const lightTheme = createTheme({
  type: "light",
  Button: {
    color: "#000"
  }
});

const darkTheme = createTheme({
  type: "dark"
});

export default function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            {menu.length &&
              menu.map((menu, index) => (
                <Route key={index} path={menu.path}>
                  <Route
                    index={true}
                    path={menu.path}
                    exact
                    element={<PrivatePagesComponent {...menu} />}
                  />
                  {menu.permissions?.length &&
                    menu.permissions
                      .filter((permission) => permission.path)
                      .map((child) => (
                        <Route
                          key={`${menu.id}${child.path}`}
                          path={child.path}
                          element={
                            <PrivateChildPagesComponent
                              parent={menu}
                              child={child}
                            />
                          }
                        />
                      ))}
                </Route>
              ))}
          </Route>
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

const PrivatePagesComponent = (props) => {
  const PrivateComponent = lazy(
    async () => await import(`./pages/private/${props.name}`)
  );

  return (
    <Suspense fallback={<></>}>
      <PrivateComponent {...props} />
    </Suspense>
  );
};

const PrivateChildPagesComponent = (props) => {
  const PrivateComponent = lazy(
    async () =>
      await import(`./pages/private/${props.parent.name}/${props.child.name}`)
  );

  return (
    <Suspense fallback={<></>}>
      <PrivateComponent {...props} />
    </Suspense>
  );
};
