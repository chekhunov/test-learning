import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { Button, ButtonProps } from '@mui/material'

import ROUTES from '~/utils/constants/routes'

interface BaseButtonProps extends ButtonProps {}

const BaseButton: FC<BaseButtonProps> = ({ sx, ...props }) => {
  const router = useRouter()

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => router.push(ROUTES.signIn)}
      sx={{ fontWeight: 600, ...sx }}
      {...props}
    >
      {props?.name}
    </Button>
  )
}

export default BaseButton
