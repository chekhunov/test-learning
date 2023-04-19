import React, { FC } from 'react'

import {
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  SwipeableDrawer,
  Link
} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import CloseIcon from '@mui/icons-material/Close'

import Logo from '~/components/base/Logo'

import ROUTES from '~/utils/constants/routes'

interface SidebarProps {
  open: boolean
  onChange: () => void
}

const Sidebar: FC<SidebarProps> = ({ open, onChange }) => {
  const navLinks = [
    { key: 'students', label: 'Students', to: ROUTES.students },
    { key: 'course_catalog', label: 'Course Catalog', to: ROUTES.courses },
    { key: 'my_training', label: 'My training', to: ROUTES.learn }
  ]
  const isCakeMaker = false

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onChange}
      onOpen={onChange}
      PaperProps={{
        sx: {
          display: 'block',
          maxWidth: 375,
          width: '100%',
          p: '15px 20px',
          overflow: 'auto'
        }
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={2.5}
        minHeight="fit-content"
      >
        <Logo />

        <IconButton onClick={onChange}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Link
        href={ROUTES.signIn}
        fontSize={15}
        fontWeight={600}
        color="textSecondary"
        mb={1}
      >
        <FormattedMessage id={'sing_in'} defaultMessage="Sign in" />
      </Link>

      <Divider sx={{ mb: 2.5, mt: 1.5 }} />

      <List component="nav" disablePadding>
        {navLinks.map(({ key, label, to }) => {
          return (
            <ListItem key={key} disablePadding>
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
            </ListItem>
          )
        })}
      </List>
    </SwipeableDrawer>
  )
}

export default Sidebar
