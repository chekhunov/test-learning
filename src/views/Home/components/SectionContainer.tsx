import React, { FC } from 'react'

import { Container, ContainerProps } from '@mui/material'

interface SectionContainerProps extends ContainerProps {}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 5, md: 7 } }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default SectionContainer
