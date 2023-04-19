import React, { FC } from 'react'

import { Button, Stack, StackProps } from '@mui/material'

import Text from './Text'

interface EmptyStateProps extends StackProps {
  image?: React.ReactElement
  text: string | React.ReactNode
  buttonText?: string
  onClick?: () => void
  hideButton?: boolean
}

const EmptyState: FC<EmptyStateProps> = ({
  image,
  text,
  buttonText,
  onClick,
  hideButton,
  ...props
}) => {
  return (
    <Stack spacing={2} mb={{ xs: 20, md: 0 }} alignItems="center" {...props}>
      {image}

      <Text
        size={{ xs: 'body1' }}
        sx={{ textAlign: 'center', color: 'text.secondary' }}
      >
        {text}
      </Text>

      {!hideButton && (
        <Button
          variant="contained"
          onClick={onClick}
          sx={{ minWidth: 173, height: 46 }}
        >
          {buttonText}
        </Button>
      )}
    </Stack>
  )
}

export default EmptyState
