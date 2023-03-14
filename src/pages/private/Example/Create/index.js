import { Grid } from "@nextui-org/react";
import * as yup from "yup";
import TextField from "../../../../components/fields/TextField";
import CreateLayout from "../../../../components/Layouts/Private/CRUD/Create";

export const schema = yup
  .object({
    name: yup.string().required().default(""),
    role: yup.string().required().default("")
  })
  .required();

const CreateExample = (props) => {
  return (
    <CreateLayout {...props} validation={schema}>
      <Grid md={6}>
        <TextField name="name" placeholder="Ex: John" />
      </Grid>
      <Grid md={6}>
        <TextField name="role" placeholder="Ex: CTO" />
      </Grid>
    </CreateLayout>
  );
};

export default CreateExample;
