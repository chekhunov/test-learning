import React, { FC } from 'react'

import { Typography } from '@mui/material'

import FormSection from './components/FormSection'

const HomePageView: FC = () => {
  return (
    <>
      <Typography component="h1" sx={{ display: 'none' }}>
        {'Platform test learning'}
      </Typography>

      <FormSection />
    </>
  )
}

export default HomePageView
