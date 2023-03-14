import { Grid } from "@nextui-org/react";
import SearchField from "../../../../fields/SearchField";
import { RenderButtonComponents } from "./RenderButtonPermissions";

const HeaderTableData = (props) => {
  const { selected, topPermissions, checkboxPermissions } = props;

  return (
    <Grid.Container gap={4} css={{ marginBottom: -60 }}>
      {!selected.length ? (
        <>
          {topPermissions.map((permission, index) => (
            <Grid
              css={{ marginRight: "-30px" }}
              key={index}
              xs={index + 1 === topPermissions.length ? true : false}
            >
              <RenderButtonComponents permission={permission} />
            </Grid>
          ))}
          <Grid>
            <SearchField name="search" placeholder="Type here..." />
          </Grid>
        </>
      ) : (
        <>
          {checkboxPermissions.map((permission) => (
            <Grid
              css={{ marginRight: "-35px", marginBottom: 8, marginTop: 8 }}
              key={permission.name}
            >
              <RenderButtonComponents permission={permission} item={selected} />
            </Grid>
          ))}
        </>
      )}
    </Grid.Container>
  );
};

export default HeaderTableData;
