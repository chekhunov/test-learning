import React from 'react'

import { Box, Typography } from '@mui/material'

import Title from '~/components/base/titlePage'
import { FormattedMessage } from 'react-intl'

const CourseCatalogView = () => {
  return (
    <Box maxWidth={405} sx={{ m: '0 auto' }}>
      <Title
        sx={{
          mt: 4,
          mb: { xs: 3, sm: 0 }
        }}
      >
        <FormattedMessage id="course_catalog" defaultMessage="Course Catalog" />
      </Title>

      <Typography
        variant="body2"
        textAlign="center"
        color="text.headline"
        mb={4}
      >
        {' HHHHHHHHZZZZZ'}
      </Typography>
    </Box>
  )
}

export default CourseCatalogView
