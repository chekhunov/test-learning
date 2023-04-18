import React, { FC } from 'react'

import { Box, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import Text from '~/components/base/Text'

const NotFound: FC = () => {
  return (
    <Stack
      alignItems="center"
      mt={22.5}
      mb={30}
      position="relative"
      p={{ xs: 2, md: 0 }}
    >
      <Box sx={{ position: 'relative' }}>
        <Text size={{ xs: 'h2' }} fontWeight={700}>
          404
        </Text>
      </Box>

      <Text
        size={{ xs: 'h3', md: 'h2' }}
        text-align="center"
        mt={3}
        mb={1.5}
        fontWeight={700}
      >
        <FormattedMessage
          id="not_found.headline"
          defaultMessage="If there's a whisk, there's a way."
        />
      </Text>

      <Text size={{ xs: 'body2' }} maxWidth={600} textAlign="center">
        <FormattedMessage
          id="not_found.text"
          defaultMessage="Sorry, we couldn't find this page. But don’t worry, you can find plenty of other things on our homepage."
        />
      </Text>
    </Stack>
  )
}

export default NotFound
