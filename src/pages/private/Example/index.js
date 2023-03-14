import React from "react";
import ListLayout from "../../../components/Layouts/Private/CRUD/List";
import { columns } from "../../../_constants/fakeData";

const Example = (props) => (
  <ListLayout columns={columns} permissions={props.permissions} />
);

export default Example;
