import React, { FC } from 'react'

import ROUTES from '~/utils/constants/routes'

import Link from '@mui/material/Link'

const Logo: FC = () => {
  return (
    <Link href={ROUTES.home} underline="none" aria-label="PT">
      TEST-LEARNING
    </Link>
  )
}

export default Logo
