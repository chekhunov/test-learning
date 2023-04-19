import { useRouter } from 'next/router'
import React, { FC, useCallback, useEffect, useState } from 'react'

import { Grid, IconButton } from '@mui/material'

import Logo from '~/components/base/Logo'

import { Menu } from '@mui/icons-material'

import Sidebar from '../Sidebar'

const HeaderMobile: FC = () => {
  const router = useRouter()
  const [isOpenSidebar, setSidebar] = useState<boolean>(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setSidebar(false))
  }, [])

  const handleClose = useCallback(() => setSidebar((prev) => !prev), [])

  return (
    <>
      <Grid
        container
        sx={{
          py: '15px',
          display: { xs: 'flex', lg: 'none' }
        }}
        justifyContent="center"
      >
        <Grid item xs={6} sx={{ marginTop: 0.5 }}>
          <Logo />
        </Grid>

        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <Menu />
          </IconButton>
        </Grid>
      </Grid>

      <Sidebar open={isOpenSidebar} onChange={handleClose} />
    </>
  )
}

export default HeaderMobile
