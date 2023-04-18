import React, { FC } from 'react'

import { Box, BoxProps, Container } from '@mui/material'

interface SectionContainerProps extends BoxProps {}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      width={{ xs: '100%', lg: 'calc(100% - 30px)' }}
      minHeight={210}
      mx={{ xs: 0, lg: 1.5 }}
      py={{ xs: 4, lg: 9 }}
      sx={{
        background: 'linear-gradient(0deg, #FAF7EF, #FAF7EF), #F6F5F1',
        borderRadius: { xs: 0, lg: '40px' },
        ...sx
      }}
      {...props}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default SectionContainer
