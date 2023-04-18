import React, { FC, ReactNode } from 'react'

import { Box, BoxProps } from '@mui/material'
import { PositionsProps } from '@mui/system'

interface TextBgProps {
  positionIcon: PositionsProps
  icon: ReactNode
  sx?: BoxProps['sx']
  children: any
}

const TextBg: FC<TextBgProps> = ({ positionIcon, icon, children, sx }) => {
  return (
    <Box component="span" position="relative" zIndex={10} sx={sx}>
      <Box
        component="span"
        position="absolute"
        zIndex={-1}
        sx={{
          ...positionIcon
        }}
      >
        {icon}
      </Box>

      {children}
    </Box>
  )
}

export default TextBg
