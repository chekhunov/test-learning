import React, { FC } from 'react'

import { Container, Link, Stack } from '@mui/material'

import Logo from '~/components/base/Logo'

import ROUTES from '~/utils/constants/routes'
import BaseButton from '~/components/base/buttons/BaseButton'
import { FormattedMessage } from 'react-intl'

interface HeaderDesktopProps {
  isEntrepreneurHome?: boolean
  isSearch?: boolean
}

const HeaderDesktop: FC<HeaderDesktopProps> = ({}) => {
  const navLinks = [
    { key: 'students', label: 'Students', to: ROUTES.students },
    { key: 'course_catalog', label: 'Course Catalog', to: ROUTES.courses },
    { key: 'my_training', label: 'My training', to: ROUTES.learn }
  ]

  const isMobile = false
  const maxWidth = 'lg'

  return (
    <Container
      maxWidth={maxWidth as any}
      sx={{
        maxWidth: '1890px',
        display: { xs: 'none', lg: 'block' }
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Logo />

          <Stack direction="row" spacing={3.5} ml={6}>
            {navLinks.map(({ key, label, to }) => (
              <Link
                key={label}
                href={to}
                underline="none"
                sx={{
                  fontSize: '15px',
                  fontWeight: 600,
                  '&:hover': {
                    color: 'lighten(color: primary.main, 10%)',
                    textDecoration: 'underline',
                    transition: 'text-decoration 3s'
                  }
                }}
              >
                <FormattedMessage id={key} defaultMessage={label} />
              </Link>
            ))}
          </Stack>
        </Stack>

        <BaseButton
          name="Sing in"
          sx={{
            ml: 3,
            height: 50,
            width: 150,
            backgroundColor: '#B2C218',
            borderRadius: '5px'
          }}
        />
      </Stack>
    </Container>
  )
}

export default HeaderDesktop
