import { useRouter } from 'next/router'
import React from 'react'

import { Button, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

interface DetailsLinkComponentProps {
  id: number
}

const DetailsLinkComponent = ({ id }: DetailsLinkComponentProps) => {
  const router = useRouter()

  return (
    <Stack flexDirection="row">
      <Button
        fullWidth
        variant="outlined"
        onClick={(): void => {
          router.push(`/profile/orders/${id}`)
        }}
        sx={{
          color: 'text.primary',
          maxWidth: 100,
          marginRight: { sx: 0, md: '5px' },
          mx: 'auto',
          py: 0.7,
          px: 0.5
        }}
      >
        <FormattedMessage id="view" defaultMessage="Edit" />
      </Button>

      <Button
        fullWidth
        variant="outlined"
        onClick={(): void => {
          router.push(`/profile/orders/${id}`)
        }}
        sx={{
          color: 'text.primary',
          maxWidth: 100,
          mx: 'auto',
          py: 0.7,
          px: 0.5
        }}
      >
        <FormattedMessage id="view" defaultMessage="View" />
      </Button>
    </Stack>
  )
}

export default DetailsLinkComponent
