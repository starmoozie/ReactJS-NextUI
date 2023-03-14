import React, { lazy, Suspense } from "react";
import { Spacer } from "@nextui-org/react";

export const RenderButtonComponents = (props) => {
  const { permission } = props;
  const ButtonComponent = lazy(
    async () => await import(`../../../../buttons/${permission.name}Button`)
  );

  return (
    <Suspense fallback={<Spacer css={{ m: 19 }} />}>
      <ButtonComponent {...props} />
    </Suspense>
  );
};
