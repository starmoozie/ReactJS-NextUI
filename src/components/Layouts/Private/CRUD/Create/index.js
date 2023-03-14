import { Card, Grid, Text, Row } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../../../buttons/DefaultButton";
import LinkButton from "../../../../buttons/LinkButton";
import {
  mapDefaultValuesOnCreate,
  HookFormContext
} from "../../../../../../_utils/helpers";

const CreateLayout = (props) => {
  const { parent, child, children, validation } = props;
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors }
    // setError
  } = useForm({
    defaultValues: mapDefaultValuesOnCreate(children),
    resolver: yupResolver(validation)
  });

  const onSubmit = (body) => {
    console.log(body);
    alert(`${child.api.method} to ${child.api.endpoint}`);
    navigate(parent.path);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card.Body css={{ py: "$10" }}>
          <Grid.Container gap={2}>
            <HookFormContext.Provider
              value={{ control: control, errors: errors }}
            >
              {children}
            </HookFormContext.Provider>
          </Grid.Container>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-start" css={{ m: 10 }}>
            <DefaultButton />
            <LinkButton
              path={parent.path}
              light={true}
              label="Cancel"
              size="sm"
            />
          </Row>
        </Card.Footer>
      </form>
    </Card>
  );
};

export default CreateLayout;
