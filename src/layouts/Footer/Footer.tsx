import { Box, Grid, Link } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        padding: '20px 0 5px'
      }}
    >
      <Link
        href="https://www.linkedin.com/in/ihor-chekhunov-8764b9139/"
        target="_blank"
      >
        Ihor Chekhunov
      </Link>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
        }}
      >
        <Link
          href="https://www.figma.com/community/file/1230646137225247067"
          target="_blank"
          sx={{ padding: '10px' }}
        >
          Maket(fig): project Test-learning
        </Link>
        <Link
          href="https://app.diagrams.net/#Hchekhunov%2Ftest-learning%2Fmain%2FtestLearning.drawio"
          target="_blank"
          sx={{ padding: '10px' }}
        >
          Shema: project Test-learning
        </Link>
        <Link
          href="https://github.com/chekhunov/test-learning"
          target="_blank"
          sx={{ padding: '10px' }}
        >
          GitHub: project Test-learning
        </Link>
      </Stack>
    </Stack>
  )
}

export default Footer
