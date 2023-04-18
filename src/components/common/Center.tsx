import React, { FC } from 'react'

import { Box, BoxProps } from '@mui/material'

interface CenterProps extends BoxProps {}

const Center: FC<CenterProps> = ({ children, ...props }) => {
  return (
    <Box
      flex={1}
      display="flex"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      m="auto"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Center
