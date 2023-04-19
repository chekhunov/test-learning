import React, { FC } from 'react'

import { AppBar, Toolbar } from '@mui/material'
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from './HeaderMobile';

const Header: FC = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: 'default',
        zIndex: 2,
        boxShadow: '0px 3px 6px #00000029'
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: { lg: 64 },
          pt: { lg: 1 },
          pb: { lg: 1 },
          pl: { lg: 1.5 },
          pr: { lg: 1.5 }
        }}
      >
        <HeaderMobile />
        <HeaderDesktop />
      </Toolbar>
    </AppBar>
  )
}

export default Header
