import React, { useMemo, useState } from "react";
import { Table, Card } from "@nextui-org/react";
import HeaderTableData from "./HeaderTableData";
import RowTableData from "./RowTableData";
import { data } from "../../../../../_constants/fakeData";
import TablePagination from "./TablePagination";

const ListLayout = (props) => {
  const { columns, permissions } = props;
  const [selected, setSelected] = useState([]);
  const [perPage, setPerPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const page = +perPage[0];
    const firstPageIndex = (currentPage - 1) * page;
    const lastPageIndex = firstPageIndex + page;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, perPage]);

  const handleSelectionChange = (keys) => {
    setSelected(keys);
  };

  // Get permission on top table header
  const topPermissions = useMemo(
    () =>
      permissions.filter(
        (permission) =>
          permission.position === "top" && permission.type === "button"
      ),
    [permissions]
  );

  // Get permission on top table header checkboxes
  const checkboxPermissions = useMemo(
    () =>
      permissions.filter(
        (permission) =>
          permission.position === "top" && permission.type === "checkbox"
      ),
    [permissions]
  );

  // Get permission on line row
  const linePermissions = useMemo(
    () => permissions.filter((permission) => permission.position === "line"),
    [permissions]
  );

  return (
    <Card isHoverable css={{ h: "auto" }}>
      <Card.Header>
        <HeaderTableData
          selected={selected}
          topPermissions={topPermissions}
          checkboxPermissions={checkboxPermissions}
        />
      </Card.Header>
      <Card.Body>
        <Table
          aria-label="Example static collection table"
          css={{
            width: "100%",
            height: "auto",
            marginLeft: 12,
            marginRight: 12
            // marginTop: -20
          }}
          shadow={false}
          // selectionMode="multiple" // Bug NextUI selection multiple
          // onSelectionChange={(keys) => handleSelectionChange([...keys])} // Bug NextUI
          // showSelectionCheckboxes={checkboxPermissions.length ? true : false} // Bug NextUI
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={currentTableData}>
            {(item) => (
              <Table.Row>
                {columns.map((column) => (
                  <Table.Cell key={`${item.name}_${column.uid}`}>
                    <RowTableData
                      item={item}
                      column={column}
                      linePermissions={linePermissions}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Body>
      <Card.Footer>
        <TablePagination
          perPage={perPage}
          setPerPage={setPerPage}
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Card.Footer>
    </Card>
  );
};

export default ListLayout;
