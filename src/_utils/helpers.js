import { createContext } from "react";
import _ from "lodash";

export const groupBy = (array, property) =>
  _.groupBy(array, (item) => {
    const makeValue = item[property];
    delete item[property];
    return makeValue;
  });

export const flattenMenuPermissions = (arr = [], parent) =>
  arr.reduce((list, { permissions, ...e }) => {
    list.push(parent ? { parent, ...e } : e);
    if (permissions) list.push(...flattenMenuPermissions(permissions, e.name));
    return list;
  }, []);

export const handleMenuPermissionsToRoute = (menu) =>
  flattenMenuPermissions(menu)
    .map((item) => ({
      ...item,
      name: item.parent ? `${item.parent}/${item.name}` : item.name
    }))
    .filter((item) => item.path);

export const mapDefaultValuesOnCreate = (children) =>
  children
    .map((child) => ({
      [child.props.children.props.name]: ""
    }))
    .reduce((acc, key) => ({ ...acc, ...key }), {});

export const mapDefaultValuesOnEdit = (children, entry) =>
  children
    .map((child) => {
      const property = child.props.children.props.name;

      return {
        [property]: entry[property]
      };
    })
    .reduce((acc, key) => ({ ...acc, ...key }), {});

export const HookFormContext = createContext(false);
