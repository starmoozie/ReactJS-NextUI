import { Card, Grid, Text, Row } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "../../../../buttons/DefaultButton";
import LinkButton from "../../../../buttons/LinkButton";
import {
  mapDefaultValuesOnEdit,
  HookFormContext
} from "../../../../../../_utils/helpers";
import { useEffect, useState } from "react";

const EditLayout = (props) => {
  const [wait, setWait] = useState(true);
  const { parent, child, children, validation, entry } = props;
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    // setError,
    reset
  } = useForm({
    resolver: yupResolver(validation)
  });

  useEffect(() => {
    // Handle undefined defaultValues
    if (entry) {
      // Map for default values on edit field
      const data = mapDefaultValuesOnEdit(children, entry);

      // reset default values / setNew default values
      reset(data);

      // set wait to false, then render children fields
      setWait(false);
    }
  }, [entry, children, reset]);

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
            {!wait && (
              <HookFormContext.Provider
                value={{ control: control, errors: errors }}
              >
                {children}
              </HookFormContext.Provider>
            )}
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

export default EditLayout;
