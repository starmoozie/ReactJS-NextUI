import { Card, Grid, Text, Row } from "@nextui-org/react";
import LinkButton from "../../../../buttons/LinkButton";

const DetailLayout = (props) => {
  const { parent, child, children } = props;

  return (
    <Card isHoverable>
      <Card.Header>
        <Row justify="flex-start" css={{ m: 10 }}>
          <Text b>
            {parent.name} {child.name}
          </Text>
        </Row>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Grid.Container gap={2}>{children}</Grid.Container>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-start" css={{ m: 10 }}>
          <LinkButton path={parent.path} light={true} label="Close" size="sm" />
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default DetailLayout;
