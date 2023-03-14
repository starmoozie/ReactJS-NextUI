import { Row, Col } from "@nextui-org/react";
import { RenderButtonComponents } from "./RenderButtonPermissions";

export const RowTableData = (props) => {
  const { item, column, linePermissions } = props;

  return (
    <>
      {column.uid === "actions" && linePermissions.length ? (
        <Row justify="center" align="center">
          <Col css={{ d: "flex" }}>
            {linePermissions.map((permission, index) => (
              <RenderButtonComponents
                key={`${index}_${permission.name}_${item.id}`}
                item={item}
                permission={permission}
              />
            ))}
          </Col>
        </Row>
      ) : (
        <RenderCell item={item} column={column} />
      )}
    </>
  );
};

const RenderCell = (props) => {
  const { item, column } = props;
  const columnKey = column.uid;
  const Render = column.Render;
  const cellValue = item[columnKey];

  return (
    <>{Render ? <Render item={item} cellValue={cellValue} /> : { cellValue }}</>
  );
};

export default RowTableData;
