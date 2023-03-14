import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import * as yup from "yup";
import TextField from "../../../../components/fields/TextField";
import EditLayout from "../../../../components/Layouts/Private/CRUD/Edit";
import { data } from "../../../../_constants/fakeData";

export const schema = yup
  .object({
    name: yup.string().required().default(""),
    role: yup.string().required().default("")
  })
  .required();

const CreateExample = (props) => {
  const [entry, setEntry] = useState("");
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    setEntry(
      location.state ? location.state : data.find((item) => item.id === id)
    );
  }, [id, location]);

  return (
    <EditLayout {...props} validation={schema} entry={entry}>
      <Grid md={6}>
        <TextField name="name" placeholder="Ex: John" />
      </Grid>
      <Grid md={6}>
        <TextField name="role" placeholder="Ex: CTO" />
      </Grid>
    </EditLayout>
  );
};

export default CreateExample;
