import React, { FC, PropsWithChildren } from "react";

import { Container, Stack } from "@mui/material";

// import {
//   PopoverTrigger as OrigPopoverTrigger
// } from '@chakra-ui/react';

const AuthContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", lg: "space-between" }}
        mt={{ xs: 5.5, md: 7.5 }}
      >
        {children}
      </Stack>
    </Container>
  );
};

export default AuthContainer;
