import React from 'react'
import { AlertProps } from '@mui/material'

import Text from '~/components/base/Text'

interface AuthTitleProps {
  sx: AlertProps['sx']
  children: React.ReactNode
}

const Title = ({ sx, children }: AuthTitleProps) => {
  return (
    <Text
      component="h1"
      textAlign="center"
      color="textPrimary"
      fontWeight={700}
      size={{ xs: 'h3', lg: 'h2' }}
      sx={sx}
    >
      {children}
    </Text>
  )
}

export default Title
