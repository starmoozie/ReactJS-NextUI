import React, { useMemo } from "react";
import { Dropdown, Pagination, Grid } from "@nextui-org/react";

export const TablePagination = (props) => {
  const { perPage, setPerPage, data, currentPage, setCurrentPage } = props;
  const pageOptions = useMemo(
    () => [
      {
        value: 1
      },
      {
        value: 2
      },
      {
        value: 5
      },
      {
        value: data.length
      }
    ],
    [data.length]
  );

  return (
    <Grid.Container gap={4} css={{ marginTop: -60 }}>
      <Grid>
        <Dropdown disableAnimation>
          <Dropdown.Button
            color="solid"
            css={{ tt: "capitalize", marginRight: -30 }}
          >
            {perPage}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            selectionMode="single"
            selectedKeys={perPage}
            onSelectionChange={(value) => setPerPage([value.anchorKey])}
            items={pageOptions}
          >
            {(item) => (
              <Dropdown.Item key={item.value} textValue={item.value}>
                {item.value}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
      <Grid>
        <Pagination
          size="lg"
          total={data.length / perPage[0]}
          initialPage={perPage[0]}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Grid>
    </Grid.Container>
  );
};

export default TablePagination;
