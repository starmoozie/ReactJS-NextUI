import React, { useContext } from "react";
import { Input, Text } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { HookFormContext } from "../../_utils/helpers";

export const TextField = (props) => {
  const hookForm = useContext(HookFormContext);
  const { name, placeholder } = props;

  return (
    <>
      {hookForm && (
        <Controller
          name={name}
          control={hookForm.control}
          render={({ field }) => {
            const isError = hookForm.errors[name] ? true : false;
            const message = isError ? hookForm.errors[name].message : "";

            return (
              <Input
                {...field}
                initialValue={field.value}
                aria-label={name}
                clearable
                color={isError ? "error" : "primary"}
                fullWidth
                underlined
                labelLeft={
                  <Text b css={{ textTransform: "capitalize" }}>
                    {name}
                  </Text>
                }
                helperText={
                  isError ? (
                    <span style={{ color: "red" }}>{message}</span>
                  ) : (
                    <></>
                  )
                }
                placeholder={placeholder}
              />
            );
          }}
        />
      )}
    </>
  );
};

export default TextField;
