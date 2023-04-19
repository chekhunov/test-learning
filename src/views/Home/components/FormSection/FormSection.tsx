import dynamic from "next/dynamic";
import React from "react";

import LazyHydrate from "react-lazy-hydration";

import Text from "~/components/base/Text";
import FullSectionContainer from "../FullSectionContainer";

const FormSection = () => (
  <FullSectionContainer
    mt={{ xs: 0, lg: -6.5 }}
    pt={{ xs: 5, lg: 18 }}
    pb={{ xs: 5, lg: 10 }}
  >
    <Text
      size={{ xs: "h3", md: "h1" }}
      fontWeight={700}
      textAlign="center"
      maxWidth={{ xs: 320, md: 743 }}
      mx="auto"
      mb={4}
      sx={{ "& br": { display: { xs: "none", md: "block" } } }}
    >
      {"The place to <text>"}
    </Text>
  </FullSectionContainer>
);

export default FormSection;
