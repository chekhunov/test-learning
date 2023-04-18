import { AlertProps } from '@mui/material'

import Text from '~/components/base/Text'

interface AuthTitleProps {
  sx: AlertProps['sx']
  mx?: number
  title: string
}

const Title = ({ mx, sx, title }: AuthTitleProps) => {
  return (
    <Text
      component="h1"
      textAlign="center"
      color="textPrimary"
      fontWeight={700}
      mx={mx}
      size={{ xs: 'h3', lg: 'h2' }}
      sx={sx}
    >
      {title}
    </Text>
  )
}

export default Title
