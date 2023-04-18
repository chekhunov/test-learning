import React from 'react'

import { Box, Typography } from '@mui/material'

import TextBg from '~/components/common/TextBg'

import ROUTES from '~/utils/constants/routes'
import Title from '~/components/base/titlePage'
import Link from '~/components/base/Link'

const CourseCatalogView = () => {
  return (
    <Box maxWidth={405} sx={{ m: '0 auto' }}>
      <Title sx={{ mt: 4, mb: 2.3 }} title={'Course Catalog'} />

      <Typography
        variant="body2"
        textAlign="center"
        color="text.headline"
        mb={4}
      >
        HHHHHHHHZZZZZ
      </Typography>
    </Box>
  )
}

export default CourseCatalogView
