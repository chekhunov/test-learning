import dynamic from "next/dynamic";
import React from "react";

import LazyHydrate from "react-lazy-hydration";

import Text from "~/components/base/Text";
// import TextBg from "~/components/common/TextBg";

import FullSectionContainer from "../FullSectionContainer";

// const SearchForm = dynamic(() => import('~/components/forms/SearchForm'))

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
      {/* <TextBg
        sx={{ '& svg': { width: { xs: 165, md: 319 } } }}
        positionIcon={{
          top: { xs: -19, md: -1 },
          left: { xs: -5, md: -10 }
        }}
      > */}
      {"The place to <text>book a cake</text> {br}for your next event"}
      {/* </TextBg> */}
    </Text>

    {/* <LazyHydrate whenIdle>
      <SearchForm />
    </LazyHydrate> */}
  </FullSectionContainer>
);

export default FormSection;
