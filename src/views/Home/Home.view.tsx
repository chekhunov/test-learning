import dynamic from "next/dynamic";
import React, { FC } from "react";

import { Container, Divider, Typography } from "@mui/material";
// import LazyHydrate from "react-lazy-hydration";

import FormSection from "./components/FormSection";

// const BlogSection = dynamic(() => import('./components/BlogSection'))


const HomePageView: FC = () => {
  return (
    <>
      <Typography component="h1" sx={{ display: "none" }}>
        {"Platform to book a cake for your next event"}
      </Typography>

      <FormSection />

      {/* <LazyHydrate whenVisible>
        <Container maxWidth="lg">
          <Divider />
        </Container>
      </LazyHydrate> */}
    </>
  );
};

export default HomePageView;
