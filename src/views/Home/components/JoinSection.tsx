import React from "react";

import { Button } from "@mui/material";

import Link from "~/components/base/Link";
import Text from "~/components/base/Text";

import ROUTES from "~/utils/constants/routes";

import SectionContainer from "./SectionContainer";

const JoinSection = () => {
  return (
    <SectionContainer sx={{ pb: { xs: 5, md: 7 }, textAlign: "center" }}>
      <Text size={{ xs: "h3", md: "h1" }} fontWeight={700} mb={3.5}>
        {"Do you make cakes too? Join us"}
      </Text>

      <Link prefetch={false} href={ROUTES.subscription}>
        <Button
          LinkComponent={Link}
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "auto" },
            py: 1.8,
            px: 1.5,
            fontSize: 16,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {"Try for free"}
        </Button>
      </Link>
    </SectionContainer>
  );
};

export default JoinSection;
